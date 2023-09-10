import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/shared/header";
import "../../css/pages/settings/settingLayout.css";

function SettingLayout({ children }) {
  return (
    <>
      <Header title="Settings" />
      <section className="settings-layout" id="settings-layout" >
        <section className="settings-menu-container">
          <Link to={"/myprofile"}>
            <div>
              <ion-icon name="person-outline"></ion-icon> My Profile
            </div>
          </Link>
          <Link to={""}>
            <div>
              <ion-icon name="add-circle-outline"></ion-icon> Add Post
            </div>
          </Link>
          <Link to={""}>
            <div>
              <ion-icon name="key-outline"></ion-icon> Account Settings
            </div>
          </Link>
          <Link to={""}>
            <div><ion-icon name="chatbubbles-outline"></ion-icon> Chat Settings</div>
          </Link>
        </section>
        <section>{children}</section>
      </section>
    </>
  );
}

export default SettingLayout;
