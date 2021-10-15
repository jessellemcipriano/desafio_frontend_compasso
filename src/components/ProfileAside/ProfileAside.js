import React from "react";
import { useHistory } from "react-router-dom";
import '../RepositoryCard/RepositoryCard.css'
import "./ProfileAside.css"

const ProfileAside = ({profileInformations}) => {

return (

    <aside className="profile__aside col-lg-4 col-12">
        
        <img className="aside__image" alt= "user" src={profileInformations.avatar_url}></img>
    
        <h3>{profileInformations.name}</h3>
        <label>@{profileInformations.login}</label>
        <h5>{profileInformations.bio}</h5>
        <h5>{profileInformations.company}</h5>
        <h5>{profileInformations.location}</h5>
       
        <div className="row aside__row">
            <div className="aside__informations">
                <h4>{profileInformations.public_repos}</h4>
                <label>Repositórios</label>
            </div>
            <div className="aside__informations">
                <h4>{profileInformations.followers}</h4>
                <label>Seguidores</label>
            </div>
            <div className="aside__informations">
                <h4>{profileInformations.following}</h4>
                <label>Seguindo</label>
            </div>
        </div>
    </aside>
 


);
}
export default ProfileAside;