import { createContext, PropsWithChildren, SetStateAction } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { LoginResponse, RegisterRequest, User } from "../components/users/types";

const UserContext = createContext<{
  user: User | null;
  isLoggedIn: boolean;
  login: (user: LoginResponse) => void;
  logout: () => void;
  register: (userData: RegisterRequest) => void;
}>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  register: () => {}
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const [, setToken] = useLocalStorage<string | null>("token", null);

  const isLoggedIn = !!user;

  const login = (loginResponse: LoginResponse) => {
    setUser(loginResponse.user);
    setToken(loginResponse.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const register = (userData: RegisterRequest) => {
    console.log("User registered:", userData);
    setUser(userData);
  };

  return <UserContext.Provider value={{ user, isLoggedIn, login, logout, register }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
