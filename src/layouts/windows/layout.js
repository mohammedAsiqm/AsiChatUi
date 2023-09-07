import React from "react";
import "../../css/layouts/layout.css";
import profile from "../../assets/profile.jpg";

function Layout({ children }) {
  return (
    <section className="web-layout">
      <div className="layout-sidebar">
        {/* <div className="layout-sideheader">Asi Chats</div> */}
        <div className="layout-profile-container">
          <img src={profile} alt="profile" width={"60px"} />
        </div>
        <section>
          <div>
            <ion-icon name="home-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="people-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="call-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="settings-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="log-out-outline"></ion-icon>
          </div>
        </section>
        {/* <div>
          <button className="layout-logout-botton" > Logout <span><ion-icon name="log-out-outline"></ion-icon></span> </button>
        </div> */}
      </div>
      <section className="layout-content-wrapper">
        <div className="layout-content">{children}</div>
        <footer className="layout-footer">
          <div>
            <p>© {new Date().getFullYear()} Asi Chats. All rights reserved.</p>
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
