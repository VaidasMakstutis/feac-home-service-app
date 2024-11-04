import { createContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const login = user => setUser(user);
  const logout = () => setUser(null);

  const register = userData => {
    console.log("User registered:", userData);
    setUser(userData);
  };

  return <UserContext.Provider value={{ user, setUser, login, logout, register }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
