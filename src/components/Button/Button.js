import React from "react";
import "./Button.scss";


const Button = ({onClick, label}) => {

return (

    <div>
        <button
         className="button button-border"
         onClick = {onClick} >{label}</button>
    </div>
    
);
}
export default Button;