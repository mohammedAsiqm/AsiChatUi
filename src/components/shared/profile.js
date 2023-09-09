import React from "react";
import "../../css/components/shared/profile.css";

function Profile({ imgSrc, name, isFollowing = false }) {
  return (
    <div className="profile-card" >
      <div className="pc-img-container" >
        <img src={imgSrc} />
      </div>
      <h5>{name}</h5>
      {!isFollowing ? (
        <button className="follow-btn" >Follow <ion-icon name="person-add"></ion-icon></button>
      ) : (
        <section className="unfollow-btn-container" > 
          <div><button>Unfollow</button></div>
          <div><button>Message</button></div>
        </section>
      )}
    </div>
  );
}

export default Profile;
