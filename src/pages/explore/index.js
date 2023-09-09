import React from "react";
import Header from "../../components/shared/header";
import ProfileCard from "../../components/shared/profile";
import "../../css/pages/explore/index.css";

function Explore(props) {
  return (
    <section>
      <Header title="Explore" />
      <section className="explore-search-container">
        <input type="text" placeholder="Start Exploring People And Connect With Them" />
      </section>
      <section className="explore-search-result-container">
        {Array.from({ length: 22 }).map((item, i) => (
          <ProfileCard imgSrc={`https://randomuser.me/api/portraits/med/men/${i+4}.jpg`} name={"Smith James"} />
        ))}
      </section>
    </section>
  );
}

export default Explore;
