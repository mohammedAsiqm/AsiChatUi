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

const FeedPostCard = ({ profile, postUrl }) => {
  return (
    <section className="feed-post-card-container">
      <section className="feed-post-card-header">
        <div>
          <div className="feed-post-profile">
            <img src={profile} width={45} />
          </div>
        </div>
        <div>
          <h5>Smith James</h5>
          <p>2hrs</p>
        </div>
      </section>
      <section className="feed-post-card-image" style={{ backgroundImage: `url(${postUrl})` }}></section>
      <section className="feed-post-card-actions">
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="send-outline"></ion-icon>
      </section>
      <section className="feed-post-card-body">
        <p>
          Rocks are naturally occurring solid aggregates or mixtures of minerals, mineraloids, or organic materials. They are an essential part of the Earth's crust and are the building blocks of the Earth's
          geology. Rocks are classified into three main types based on their formation processes: igneous, sedimentary, and metamorphic.
        </p>
      </section>
    </section>
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
            <section className="feed-post-container">
              <FeedPostCard profile={`https://randomuser.me/api/portraits/thumb/men/${7}.jpg`} postUrl={"https://t4.ftcdn.net/jpg/05/51/22/65/360_F_551226555_JoynWcUCPb7U68psjX0PnNG51WF4to2E.jpg"} />
              <FeedPostCard profile={`https://randomuser.me/api/portraits/thumb/men/${5}.jpg`} postUrl={"https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"} />
              <FeedPostCard
                profile={`https://randomuser.me/api/portraits/thumb/men/${67}.jpg`}
                postUrl={"https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"}
              />
              <FeedPostCard profile={`https://randomuser.me/api/portraits/thumb/men/${47}.jpg`} postUrl={"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d"} />
            </section>
          </section>
          <section>
            <h4 className="suggestion-title">Suggestions</h4>
            <section className="suggestion-container">
              <ProfileCard imgSrc={"https://randomuser.me/api/portraits/med/men/60.jpg"} name={"Smith James"} />
              <ProfileCard imgSrc={"https://randomuser.me/api/portraits/med/men/40.jpg"} name={"Jhon mathew"} />
              <ProfileCard imgSrc={"https://randomuser.me/api/portraits/med/men/30.jpg"} name={"duke official"} />
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Feeds;
