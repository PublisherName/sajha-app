import type { Session } from "@supabase/supabase-js";
import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface ProfileData {
  name: string;
  phone: string;
  pushNotifications: boolean;
  emailAlerts: boolean;
}

interface AuthUser {
  name: string;
  email: string;
  phone: string;
  initials: string;
}

interface AuthContextValue {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: AuthUser | null;
  profile: ProfileData | null;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ error?: string }>;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<ProfileData>) => Promise<{ error?: string }>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<{ error?: string }>;
  resetPassword: (email: string) => Promise<{ error?: string }>;
}

const AuthContext = createContext<AuthContextValue>({
  isLoggedIn: false,
  isLoading: true,
  user: null,
  profile: null,
  login: async () => ({}),
  signup: async () => ({}),
  logout: async () => {},
  updateProfile: async () => ({}),
  changePassword: async () => ({}),
  resetPassword: async () => ({}),
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      if (currentSession?.user) {
        fetchProfile(currentSession.user.id);
      } else {
        setIsLoading(false);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
      if (currentSession?.user) {
        fetchProfile(currentSession.user.id);
      } else {
        setProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string) => {
    const { data } = await supabase
      .from("profiles")
      .select("name, phone_number, push_notifications, email_alerts")
      .eq("id", userId)
      .single();

    setProfile({
      name: data?.name ?? session?.user?.user_metadata?.name ?? "User",
      phone: data?.phone_number ?? "",
      pushNotifications: data?.push_notifications ?? true,
      emailAlerts: data?.email_alerts ?? false,
    });
    setIsLoading(false);
  };

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      return { error: error.message };
    }
    return {};
  };

  const signup = async (name: string, email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    if (error) {
      return { error: error.message };
    }
    if (!data.user || (data.user.identities && data.user.identities.length === 0)) {
      return { error: "An account with this email already exists." };
    }
    await supabase.from("profiles").upsert({ id: data.user.id, name, email });
    return {};
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setProfile(null);
  };

  const updateProfile = async (data: Partial<ProfileData>) => {
    if (!session?.user) {
      return { error: "Not authenticated" };
    }

    const updates: Record<string, unknown> = {};
    if (data.name !== undefined) updates.name = data.name;
    if (data.phone !== undefined) updates.phone_number = data.phone;
    if (data.pushNotifications !== undefined) updates.push_notifications = data.pushNotifications;
    if (data.emailAlerts !== undefined) updates.email_alerts = data.emailAlerts;

    const { error } = await supabase.from("profiles").upsert({ id: session.user.id, ...updates });

    if (error) {
      return { error: error.message };
    }

    setProfile((prev) => ({
      name: data.name ?? prev?.name ?? "User",
      phone: data.phone ?? prev?.phone ?? "",
      pushNotifications: data.pushNotifications ?? prev?.pushNotifications ?? true,
      emailAlerts: data.emailAlerts ?? prev?.emailAlerts ?? false,
    }));

    return {};
  };

  const changePassword = async (currentPassword: string, newPassword: string) => {
    if (!session?.user?.email) {
      return { error: "Not authenticated" };
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: session.user.email,
      password: currentPassword,
    });
    if (signInError) {
      return { error: "Current password is incorrect." };
    }

    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      return { error: error.message };
    }

    return {};
  };

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "sajha://reset-password",
    });
    if (error) {
      return { error: error.message };
    }
    return {};
  };

  const user: AuthUser | null = session?.user
    ? (() => {
        const meta = session.user.user_metadata;
        const name: string = profile?.name ?? meta?.name ?? session.user.email ?? "User";
        const email: string = session.user.email ?? "";
        const phone: string = profile?.phone ?? "";
        const parts = name.trim().split(/\s+/);
        const initials =
          parts.length >= 2
            ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
            : name.slice(0, 2).toUpperCase();
        return { name, email, phone, initials };
      })()
    : null;

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!session,
        isLoading,
        user,
        profile,
        login,
        signup,
        logout,
        updateProfile,
        changePassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
