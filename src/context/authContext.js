import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export  function AuthProvider({ children }) {
  
  const [user, setUser] = useState();
  const [searchResponse , setSearchResponse] = useState("");

  const value = {
      user,
      setUser,
      searchResponse , setSearchResponse
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
