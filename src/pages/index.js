import React from "react";

export default function Login() {
  
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
