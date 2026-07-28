import { createContext, type ReactNode, useContext, useState } from "react";

interface AuthContextValue {
  isLoggedIn: boolean;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  isLoggedIn: false,
  login: () => false,
  signup: () => false,
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email: string, password: string): boolean => {
    if (email && password) {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const signup = (name: string, email: string, password: string): boolean => {
    if (name && email && password) {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return <AuthContext.Provider value={{ isLoggedIn, login, signup, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
