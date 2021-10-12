import React, { useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export  function AuthProvider({ children }) {
  
  //const [companyName, setCompanyName] = useState("Nome da Empresa");
  const [user, setUser] = useState();


  useEffect(() => {
 /*  const URL = "https://github.com/login/oauth/access_token"
   
   const body = {
    client_id : "212ea550d6a498db53af",
    client_secret: "9d8bf1d354957d3f233c606bb714bb0e1f2f8ce0",
    code: "88fab888d762140d15a6",
    redirect_uri:"http://localhost:3000/myGitSpace"	
    }
    
    let _headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }

    const method = "POST"
let response =  fetch(URL, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: _headers
})*/

  }, [user]);

  



  const value = {
      user,
      setUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
