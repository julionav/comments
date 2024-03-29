import React from "react";

const UserContext = React.createContext();

export const UserProvider = props => {
  const [user, setUser] = React.useState(null);

  return <UserContext.Provider value={{ user, setUser }} {...props} />;
};

export const useUser = () => React.useContext(UserContext);
