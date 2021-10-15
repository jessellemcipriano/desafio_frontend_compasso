import React from "react";

import './StarredCard.css'

import StarredIcon from "../../assets/images/StarIcon.svg"
import WatcherIcon from "../../assets/images/WatcherIcon.svg"


const StarredCard = ({repositoryInformations}) => {

return (
<section className="starred">
    <div className="starred__card">
        <div className="starred__label">  
            
            <div className="starred_owner">
                <img src={repositoryInformations.owner.avatar_url}/>  
                <label>@{repositoryInformations.owner.login}</label>  
            </div> 
            <h4><a href={repositoryInformations.html_url}>{repositoryInformations.full_name}</a></h4>
        </div>

        
        <div className="starred__description">
            <h5>{repositoryInformations.description}</h5>
        </div>
        
        <div className="starred__informations">
            <div className="starred__language">
                <h5>{repositoryInformations.language}</h5>
            </div>  
            <div className="starred__data">
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
export default StarredCard;