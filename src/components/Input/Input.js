import React from "react";
const Input = ({ placeholder, value, onChange, className}) => {
    
return (
    
    
      <input 
        type="text" 
        className={className} 
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)} />
    


   
);
}
export default Input;