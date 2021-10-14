import React from "react";
import "./navbar.css"
import Logo from "../../assets/images/navbar__logo.svg"
import Logout from "../../assets/images/LogoutIcon.svg"
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/authContext";


const Navbar = () => {

const history = useHistory();
const { setUser } = useAuth();

function logOut(){
  setUser("")
  history.push('/')
}

return (

    <nav className="navbar navbar-light navbar__bg">
      <div className="navbar-brand">
        <img src={Logo} width="90" height="auto" className="align-top" alt="logo"/>
      </div>
      <button 
       className = "btn mr-32 navbar__button"
       onClick={logOut}
      > 
        Logout
      </button>
    </nav>
);
}
export default Navbar;