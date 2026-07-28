import type { Session } from "@supabase/supabase-js";
import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface AuthUser {
  name: string;
  email: string;
  initials: string;
}

interface AuthContextValue {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ error?: string }>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  isLoggedIn: false,
  isLoading: true,
  user: null,
  login: async () => ({}),
  signup: async () => ({}),
  logout: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, currentSession) => {
      setSession(currentSession);
    });

    return () => subscription.unsubscribe();
  }, []);

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
  };

  const user: AuthUser | null = session?.user
    ? (() => {
        const meta = session.user.user_metadata;
        const name: string = meta?.name ?? session.user.email ?? "User";
        const email: string = session.user.email ?? "";
        const parts = name.trim().split(/\s+/);
        const initials =
          parts.length >= 2
            ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
            : name.slice(0, 2).toUpperCase();
        return { name, email, initials };
      })()
    : null;

  return (
    <AuthContext.Provider value={{ isLoggedIn: !!session, isLoading, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
