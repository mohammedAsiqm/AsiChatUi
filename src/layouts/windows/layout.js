import React from "react";
import "../../css/layouts/layout.css";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.webp";

function Layout({ children }) {
  return (
    <section className="web-layout">
      <div className="layout-sidebar">
        {/* <div className="layout-sideheader">Asi Chats</div> */}
        <div className="layout-profile-container">
          <img src={profile} alt="profile" width={"60px"} />
        </div>
        <section>
          <Link to={"/feeds"} title="Feeds">
            <div>
              <ion-icon name="home-outline"></ion-icon>
            </div>
          </Link>
          <Link to={"/chats"} title="Chats">
            <div>
              <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
            </div>
          </Link>
          <Link to={"/explores"} title="Explores">
            <div>
              <ion-icon name="people-outline"></ion-icon>
            </div>
          </Link>
          <Link to={"#"} title="Calls">
            <div>
              <ion-icon name="call-outline"></ion-icon>
            </div>
          </Link>
          <Link to={"/myprofile"} title="Settings">
            <div>
              <ion-icon name="settings-outline"></ion-icon>
            </div>
          </Link>
          <Link to={"/"} title="Logout">
            <div>
              <ion-icon name="log-out-outline"></ion-icon>
            </div>
          </Link>
        </section>
      </div>
      <section className="layout-content-wrapper">
        <div className="layout-content">{children}</div>
        <footer className="layout-footer">
          <div>
            <p>Copyright © {new Date().getFullYear()} Asi Chats. All rights reserved.</p>
          </div>
          <div>
            <p>App Developed by : Mohammed Asiq</p>
          </div>
        </footer>
      </section>
    </section>
  );
}

export default Layout;
