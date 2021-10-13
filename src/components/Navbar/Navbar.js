import React from "react";
import "./navbar.css"
import Logo from "../../assets/images/navbar__logo.svg"

const Navbar = () => {
    
return (

    <nav class="navbar navbar-light navbar__bg">
  <a class="navbar-brand">
    <img src={Logo} width="90" height="45" class="d-inline-block align-top" alt=""/>
    
  </a>
</nav>
);
}
export default Navbar;