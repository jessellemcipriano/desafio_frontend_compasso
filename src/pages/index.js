import React, { location, useEffect, useState } from "react";
import api from "../services/api";

//import Button from "../components/button";

//import Input from "../components/inputs/inputs";
//import { useHistory } from "react-router-dom";

//import { useAuth } from "../context/AuthContext";
//import Error from "../components/Error";

export default function Login() {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState();

  //const { currentUser, signIn } = useAuth();

  //const history = useHistory();

  //useEffect(() => {
  //  if (currentUser?.emailVerified) history.push("/dashboard/overview");
  //}, [currentUser]);

  //const handleLoginButton = async () => {
   // setError("");
   // if (!password || !email) {
    //  setError("Preencha os dados acima.");
    //  return;
   // }

    //try {
    //  setLoading(true);
    //  await signIn(email, password);
      //history.push("/dashboard/overview");
   // } catch (error) {
    //  setLoading(false);
   //   setError(FirebaseErrorMessages[error.code] || error.message);
  //  }
 // };

  //const handleRegisterButton = () => {
   // history.push("/business/register");
  //};

  const [user, setUser] = useState();

  const handleLoginButton = async () => {
      // TODO -> Tornar isso aqui uma variável de ambiente
    window.location.replace("http://github.com/login/oauth/authorize?&client_id=212ea550d6a498db53af&scope=user%20private_repo%20security_events")
    }



  return (
    <section >
        <button 
            onClick={handleLoginButton}
        > Login</button>
    </section>
  );
}
