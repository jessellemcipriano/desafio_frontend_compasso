import React from "react";

import './RepositoryCard.css'
import StarredIcon from "../../assets/images/StarIcon.svg"
import WatcherIcon from "../../assets/images/WatcherIcon.svg"


const RepositoryCard = ({repositoryInformations}) => {

return (
<section className="repository">
    <div className="repository__card">
        <div className="repository__label">       
            <h4><a href={repositoryInformations.html_url}>{repositoryInformations.name}</a></h4>
        </div>
        
        <div className="repository__description">
            <h5>{repositoryInformations.description}</h5>
        </div>
        
        <div className="repository__informations">
            <div className="repository__language">
                <h5>{repositoryInformations.language}</h5>
            </div>  
            <div className="repository__data">
                <img src={StarredIcon} />
                <label>{repositoryInformations.stargazers_count}</label>
                <img src={WatcherIcon} />
                <label>{repositoryInformations.watchers_count}</label>  
            </div>
        </div> 
    </div>
</section> 

);
}
export default RepositoryCard;