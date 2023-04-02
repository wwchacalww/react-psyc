import jwtDecode from "jwt-decode";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { api } from "../services/api";

interface User {
  name: string;
  email: string;
  avatar_url?: string;
  role?: string;
}

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthContextProps {
  user: User;
  signIn(input: SignInCredencials): Promise<void>;
  signOut(): void;
}
type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(() => {
    const token = localStorage.getItem("@GoIElo:token");
    if (token) {
      const userToken = jwtDecode<User>(token);
      return userToken;
    }

    return {} as User;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredencials) => {
    try {
      const response = await api.post("auth/login", {
        email,
        password,
      });
      const { token, refresh_token } = response.data;
      localStorage.setItem("@GoIElo:token", token);
      localStorage.setItem("@GoIElo:refresh_token", refresh_token);
      api.defaults.headers.authorization = `Bearer ${token}`;
      const userToken = jwtDecode<User>(token);
      setUser(userToken);
    } catch (err) {
      throw new Error("Confira seu email ou senha!");
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@GoIElo:token");
    localStorage.removeItem("@GoIElo:refresh_token");
    setUser({} as User);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
