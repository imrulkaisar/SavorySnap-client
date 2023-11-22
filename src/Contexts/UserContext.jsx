import { createContext } from "react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const authInfo = {};
  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
