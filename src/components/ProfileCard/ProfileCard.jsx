import "./styles.css";
import React from 'react';

function ProfileCard({ data }) {
    return (
        <div className="profile_card-wrapper">
            {data.avatar && <img className="profile-avatar" src={data.avatar} alt="Avatar" />}
            <h2 className="profile-name"> 
                {data.firstName} {data.lastName} 
            </h2>
            <p className="profile-city">City: {data.city}</p>
        </div>
    )
}

export default ProfileCard;