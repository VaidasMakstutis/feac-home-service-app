import { createContext, PropsWithChildren, SetStateAction } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { LoginResponse, User } from "../components/users/types";
import { toast } from "react-toastify";

const UserContext = createContext<{
  user: User | null;
  isLoggedIn: boolean;
  login: (user: LoginResponse) => void;
  logout: () => void;
}>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const [, setToken] = useLocalStorage<string | null>("token", null);

  const isLoggedIn = !!user;

  const login = (loginResponse: LoginResponse) => {
    setUser(loginResponse.user);
    setToken(loginResponse.token);
    toast.success("Login is successful!");
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    toast.success("You are logged out!");
  };

  return <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
