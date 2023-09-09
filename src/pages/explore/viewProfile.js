import React from "react";
import Header from "../../components/shared/header";
import ViewProfileComponent from "../../components/shared/viewProfile";
import "../../css/pages/explore/viewProfile.css";

function ViewProfile() {
  return (
    <section>
      <Header title="Profile" />
      <section className="view-profile-wrapper" >
        <ViewProfileComponent />
      </section>
    </section>
  );
}

export default ViewProfile;
