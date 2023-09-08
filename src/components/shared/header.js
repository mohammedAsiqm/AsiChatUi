import React from "react";
import "../../css/components/shared/header.css";

function Header({ title = "" }) {
  return (
    <section className="header-container">
      <div className="header-title" ><h2>{title}</h2></div>
      <div></div>
    </section>
  );
}

export default Header;
