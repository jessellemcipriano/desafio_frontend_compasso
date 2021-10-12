import React from "react";
import "./Button.scss";
import { useHistory } from "react-router-dom";

const Button = () => {
    
const history = useHistory();

const goToRepositories = () => {
 history.push("/")
}    



return (

    <div>
        <button
         className="button button-border"
         onClick = {goToRepositories} >Teste de botão</button>
    </div>
    
);
}
export default Button;