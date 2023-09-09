import React from "react";
import Header from "../../components/shared/header";
import ProfileCard from "../../components/shared/profile";
import "../../css/pages/feeds/index.css";

const ProfileStoryCard = ({ imgSrc }) => {
  return (
    <div className="feed-story-card">
      <div>
        <img src={imgSrc} width={50} />
      </div>
      <h6>Smith James</h6>
    </div>
  );
};

function Feeds() {
  return (
    <section style={{ height: "100%" }}>
      <Header title={"Feeds"} />
      <section className="feeds-container">
        <section className="feeds-layout">
          <section>
            <section className="feeds-story-container">
              {Array.from({ length: 15 }).map((item, i) => (
                <ProfileStoryCard imgSrc={`https://randomuser.me/api/portraits/med/men/${i + 2}.jpg`} />
              ))}
            </section>
            <section className="feed-post-container" >
                
            </section>
          </section>
          <section>
            <h4 className="suggestion-title" >Suggestions</h4>
            <section className="suggestion-container" >
              <ProfileCard imgSrc={"https://randomuser.me/api/portraits/med/men/60.jpg"} name={"Smith James"} />
              <ProfileCard imgSrc={"https://randomuser.me/api/portraits/med/men/40.jpg"} name={"Jhon mathew"} />
              <ProfileCard imgSrc={"https://randomuser.me/api/portraits/med/men/30.jpg"}  name={"duke official"}/>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Feeds;
