import React from "react";
//import "./Loading.scss";

const Input = ({ placeholder, value, onChange}) => {
    
return (

    <div>
        <input 
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        ></input>
    </div>
    
);
}
export default Input;