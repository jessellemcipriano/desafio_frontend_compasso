import React, { useEffect, useState, } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import RepositoryCard from "../../components/RepositoryCard/RepositoryCard";

import githubApi from "../../services/githubApi";

import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import BackIcon from "../../assets/images/backIcon.svg"
import "./RepositoryPage.css"



export default function Repository() {
  
  const { user } = useAuth();
  const {searchResponse} = useAuth();
  const [repositoryList, setRepositoryList] = useState();
  const [pageIndex, setPageIndex] = useState(1);
  const history = useHistory();
  
 

  useEffect(()=>{
    if(!user){
      history.push('/')
    }

    if(!searchResponse){
      history.push('/')
    }

  }, [])



  useEffect(()=>{
    
    const url = "/users/" + searchResponse.login + "/repos?per_page=10&page=" + pageIndex
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

      const container = document.getElementById('repository__list')
      if(container)
        container.scrollTo(0,0)

  }, [pageIndex])



  const goToSearchPage = () => {
    history.push('/myGitSpace')
  }


  const previousPageIndex = () => {
    if( pageIndex <= 1){
      return;
    }
    const index = pageIndex -1;
    setPageIndex(index)
  }


  const nextPageIndex = () => {
    if(repositoryList.data.length === 0){
      return;
    }
    const index = pageIndex + 1;
    setPageIndex(index)
  }


    return (
      <>
      <Navbar/>
      <section className="repository__container">
         
          <div className="col-lg-12 col-12 repository__cards">
            <div className="label__row">
              <h3>Repositórios</h3>
              <Button 
              label="Voltar"
              icon={BackIcon}
              onClick = {goToSearchPage}
              />
            </div>
            { repositoryList ? 
              <div id="repository__list"  className="repository__list">
               { repositoryList.data.length >0 ? (repositoryList.data.map((repositoryInformations) => (
                  <RepositoryCard repositoryInformations={repositoryInformations}  />
              ))) : (<label>Isso é tudo, pessoal!</label>)}
              <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    
                    <li className="page-item disabled">
                      <button className="btn btn-link" onClick={previousPageIndex} >Previous</button>
                    </li>
                    
                    <li className="page-item">
                    <button className="btn btn-link" onClick={nextPageIndex} >Next</button>
                    </li>

                  </ul>
                </nav>
             </div> 
             :
             <p>Ops, parece que esse usuário ainda não tem repositórios publicos!</p>
             }

          </div>
        
      </section> 
      </> 
    );
  
}
