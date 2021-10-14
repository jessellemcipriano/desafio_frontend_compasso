import React from "react";
import "./Button.scss";



const Button = ({onClick, label, icon}) => {

return (

    <div>
        <button
         className="button button-border"
         onClick = {onClick} ><img src= {icon} alt="icon" /> {label}</button>
    </div>
    
);
}
export default Button;