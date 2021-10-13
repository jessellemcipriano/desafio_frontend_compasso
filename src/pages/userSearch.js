import React, { useEffect, useState, } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/authContext";

import api from "../services/api";
import Input from "../components/Input/Input";
import Navbar from "../components/Navbar/Navbar";
import ProfileCard from "../components/ProfileCard/ProfileCard";

import "../styles/userSearchPage.css"
import UserIllustration from "../assets/images/userSearchPage.svg"


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
        setSearchResponse("")
        return;
      }
      
      const url = "users/" + searchUserName
      api
      .get(url)
      .then((response) => setSearchResponse(response.data))
      .catch((err) => {
        //setSearchResponse("")
        console.error(err);
      });

  }, [searchUserName]);

  console.log(searchResponse)

  const goToRespositories = () =>{
    console.log("deu certo")
  }

  return (
    <>
    <Navbar/>
    <section >
      <div className="search__container">
       <Input
       className="search__input"
       value= {searchUserName}
       placeholder="Quem você quer encontrar por aqui?"
       onChange={setSearchUserName}
       /> 
       { searchResponse ? 
       <ProfileCard
       profileInformations = {searchResponse}
       /> :
       <img alt="ilustração" className = "search__image" src={UserIllustration}/>
       }
       {searchResponse.login}
      </div>   
    </section>
    </>
  );
}
