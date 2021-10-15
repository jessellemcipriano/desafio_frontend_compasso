import React, { useEffect, useState, } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import StarredCard from "../../components/StarredCard/StarredCard";

import githubApi from "../../services/githubApi";

import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import BackIcon from "../../assets/images/backIcon.svg"
//import "./StarredPage.css"


export default function Repository() {
  
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

    const url = "/users/" + searchResponse.login + "/starred?per_page=20"
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

  const goToSearchPage = () => {
    history.push('/myGitSpace')
  }

  console.log(searchResponse)

    return (
      <>
      <Navbar/>
      <section className="repository__container">
         
          <div className="col-lg-12 col-12 repository__cards">
            <div className="label__row">
              <h3>Repositórios Favoritos</h3>
              <Button 
              label="Voltar"
              icon={BackIcon}
              onClick = {goToSearchPage}
              />
            </div>
            { repositoryList ? 
              <div className="repository__list">
              {repositoryList.data.map((repositoryInformations) => (
                  <StarredCard repositoryInformations={repositoryInformations}  />
              ))} 
             </div> 
             :
             <p>Ops, parece que esse usuário ainda não tem repositórios publicos!</p>
             }

          </div>
        
      </section> 
      </> 
    );
  
}
