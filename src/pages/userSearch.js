import React, { useEffect, useState, } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Loading from "../components/Loading/Loading";
import Input from "../components/Input/Input";
import api from "../services/api";
import Button from "../components/Button/Button";

export default function Call() {
  const { setUser } = useAuth();
  const {searchResponse, setSearchResponse} = useAuth();
  const history = useHistory();
  const [ searchUserName, setSearchUserName ] = useState("")
 

  
  const params = new URLSearchParams(window.location.search);
  let gitHubResponseCode =  params.get('code');
  let gitHubResponseError =  params.get('error');
  gitHubResponseCode ? setUser(true) : setUser(false)
  
  if(gitHubResponseError){
    history.push("/")
  } 

  useEffect(() => {
    
      if (searchUserName.trim() === "") {
        return;
      }
      
      const url = "users/" + searchUserName
      api
      .get(url)
      .then((response) => setSearchResponse(response.data))
      .catch((err) => {
        console.error(err);
      });

  }, [searchUserName]);

  console.log(searchResponse)

  return (
    <section >
      { gitHubResponseCode ?
       <Input
       value= {searchUserName}
       placeholder="nome de usuário"
       onChange={setSearchUserName}
       /> 
       : <Loading/> }

       {searchResponse.login} 
        <Button></Button>
    </section>
  );
}
