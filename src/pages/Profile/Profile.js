import React, { useEffect, useState, } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import RepositoryCard from "../../components/RepositoryCard/RepositoryCard";
import ProfileAside from "../../components/ProfileAside/ProfileAside"
import githubApi from "../../services/githubApi";

import Navbar from "../../components/Navbar/Navbar";
import "./Profile.css"



export default function Profile() {
  
  const { user } = useAuth();
  const {searchResponse} = useAuth();
  const [repositoryList, setRepositoryList] = useState();
  const history = useHistory();
  
 

  useEffect(()=>{
    if(!user){
      history.push('/')
    }

    if(!searchResponse){
      history.push('/')
    }

    const url = "/users/" + searchResponse.login + "/repos?per_page=6"
      githubApi
      .get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user}`
        }})
      .then((response) => setRepositoryList(response))
      .catch((err) => {
        
        setRepositoryList("")
      });

      console.log(repositoryList)
  }, [])

  

  console.log(searchResponse)

    return (
      <>
      <Navbar/>
      <section className="profile__container">
        <div className="row">
          <ProfileAside
          profileInformations = {searchResponse}
          />  
          <div className="col-lg-8 col-12 repository__cards">
            <h3>Repositórios recentes</h3>
            
            { repositoryList ? 
            <div className="repository__list">
             
             {repositoryList.data.map((repositoryInformations) => (
                <RepositoryCard repositoryInformations={repositoryInformations}  />
              ))} 
            </div> : <p>Ops, parece que esse usuário ainda não tem repositórios publicos!</p> }
          </div>
        </div>
      </section> 
      </> 
    );
  
}
