import React, { useEffect, useState, } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/authContext";

import githubApi from "../../services/githubApi";
import serverApi from "../../services/serverApi";

import Input from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";
import ProfileCard from "../../components/ProfileCard/ProfileCard";


import "./userSearchPage.css"
import UserIllustration from "../../assets/images/userSearchPage.svg"



export default function Search() {
  
  const { user, setUser } = useAuth();
  const {searchResponse, setSearchResponse} = useAuth();
  const history = useHistory();
  const [ searchUserName, setSearchUserName ] = useState("")
 

  useEffect(()=>{
    if(!user){
      const params = new URLSearchParams(window.location.search);
      let gitHubResponseCode =  params.get('code');
      let gitHubResponseError =  params.get('error');
      
      if(gitHubResponseError){
        history.push("/")
      } 
      
      let error = false
      const serverurl = "/github/auth/" + gitHubResponseCode
          serverApi
          .get(serverurl)
          .then((response) => setUser(response.data.access_token) )
          .catch((err) => { 
            history.push('/')
          });      
    }

    if(searchResponse){
      setSearchUserName(searchResponse.login)
    }

  }, [])


  useEffect(() => {
    
      if (searchUserName.trim() === "") {
        setSearchResponse("")
        return;
      }

      
      
      const url = "/users/" + searchUserName
      githubApi
      .get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user}`
        }})
      .then((response) => setSearchResponse(response.data))
      .catch((err) => {
        setSearchResponse("")
      });

  }, [searchUserName]);

  


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
        </div>   
      </section> 
      </> 
    );
  
}
