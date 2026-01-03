import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type User = {
  sub?: string;
  name?: string;
  email?: string;
  picture?: string;
  roles?: string[];
};

type AuthContextType = {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const TOKEN_KEY = "google_token";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const decodeJwt = (t: string) => {
    try {
      // safe minimal decoder: decode the payload (no verification)
      const parts = t.split(".");
      if (parts.length < 2) return null;
      const payload = parts[1];
      const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
      return JSON.parse(decodeURIComponent(encodeURIComponent(json)));
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    const t = localStorage.getItem(TOKEN_KEY);
    if (t) {
      setToken(t);
      const d: any = decodeJwt(t);
      if (d)
        setUser({
          sub: d.sub,
          name: d.name,
          email: d.email,
          picture: d.picture,
        });
    }
  }, []);

  const login = useCallback((t: string) => {
    localStorage.setItem(TOKEN_KEY, t);
    setToken(t);
    const d: any = decodeJwt(t);
    if (d)
      setUser({ sub: d.sub, name: d.name, email: d.email, picture: d.picture });
    else setUser(null);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setUser(null);
  }, []);

  const value: AuthContextType = {
    token,
    user,
    isAuthenticated: Boolean(token),
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used within AuthProvider");
  return ctx;
};

export default AuthContext;
