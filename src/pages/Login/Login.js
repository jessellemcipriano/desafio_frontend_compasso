import React from "react";
import './Login.css'
import Logo from "../../assets/images/Logo.svg"
import Icon from "../../assets/images/icon.svg"
import Button from '../../components/Button/Button'


export default function Login() {
  
  const handleLoginButton = async () => {
    window.location.replace(process.env.REACT_APP_GITHUB_AUTH_URL+"?&client_id="+ process.env.REACT_APP_GITHUB_API_CLIENT_ID+"&scope=user%20private_repo%20security_events")
    }
    
    
  return (
    <section >
        <div className="login__container">
          <img alt= "logo" src={Logo} className="login__image"/>
          <h6>Entre com </h6>
          <Button 
              icon = {Icon}
              label="GitHub"
              onClick={handleLoginButton}
          />
        </div>
    </section>
  );
}
