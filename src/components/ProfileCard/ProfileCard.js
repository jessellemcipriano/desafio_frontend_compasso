import React from "react";
import "./ProfileCard.css"

const ProfileCard = ({profileInformations}) => {
    
return (
<section>
    <div className="profile__card">
        <img className="profile__image" src={profileInformations.avatar_url}></img>
        <h2>{profileInformations.name}</h2>
        <h4>{profileInformations.bio}</h4>
        <h5>{profileInformations.company}</h5>
        <h3>{profileInformations.followers}</h3>
        <h3>{profileInformations.following}</h3>
        <h3>{profileInformations.public_repos}</h3>
    </div>
</section> 

);
}
export default ProfileCard;