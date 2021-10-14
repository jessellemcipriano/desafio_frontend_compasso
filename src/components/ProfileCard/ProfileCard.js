import React from "react";
import { useHistory } from "react-router-dom";


import "./ProfileCard.css"
import Button from "../Button/Button"
import RepoIcon from "../../assets/images/repositoryIcon.svg"
import StarredIcon from "../../assets/images/StarredIcon.svg"



const ProfileCard = ({profileInformations}) => {

const history = useHistory();  

const goToProfile = () =>{
  history.push( profileInformations.login + '/profile/' )
}

const goToRepository = () =>{
  history.push(profileInformations.login + '/repository')
}

const goToStarred = () =>{
  history.push(profileInformations.login + '/starred')
}

return (
<section className="profile">
    <div className="profile__card">
        <img className="profile__image" alt= "user" src={profileInformations.avatar_url}></img>

        <h3>{profileInformations.name}</h3>
        <label>@{profileInformations.login}</label>
        <button className="btn btn-link" onClick={goToProfile} >Ver perfil</button>

        <div className="row profile__row">
            <div className="profile__informations">
                <h4>{profileInformations.public_repos}</h4>
                <label>Repositórios</label>
            </div>
            <div className="profile__informations">
                <h4>{profileInformations.followers}</h4>
                <label>Seguidores</label>
            </div>
            <div className="profile__informations">
                <h4>{profileInformations.following}</h4>
                <label>Seguindo</label>
            </div>
        </div>
        <div className="row profile__actions">
            <Button
            icon={RepoIcon}
            label="Repos"
            onClick = {goToRepository}
            />
            <Button
            icon={StarredIcon}
            label="Starred"
            onClick = {goToStarred}
            />
        </div>
    </div>
</section> 

);
}
export default ProfileCard;