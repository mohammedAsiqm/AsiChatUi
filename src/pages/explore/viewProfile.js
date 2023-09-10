import React from "react";
import Header from "../../components/shared/header";
import ViewProfileComponent from "../../components/shared/viewProfile";
import "../../css/pages/explore/viewProfile.css";

function ViewProfile() {
  return (
    <section>
      <Header title="Profile" />
      <section id="view-profile-wrapper" className="view-profile-wrapper" >
        <ViewProfileComponent postContainerHeight={"60vh"} />
      </section>
    </section>
  );
}

export default ViewProfile;
