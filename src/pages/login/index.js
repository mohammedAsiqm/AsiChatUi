import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import vector from "../../assets/vector3.svg";
import "../../css/pages/login/index.css";
import { Link } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  const siginHandler = (e) => {
    e.preventDefault();
    sessionStorage.setItem("isLoggedIn", true);
    navigate("/feeds");
  };

  return (
    <section className="login-container">
      <section className="login-left-container">
        <div>
          <h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Welcome to Asi Chats",
                2000,
                "Start exploring new peoples",
                2000,
                "Get connect with them",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <h2>Asi Chats helps you to find new people's globally and helps you to connect with them.</h2>
        </div>
        <div>
          <img src={vector} width={"420px"} />
        </div>
      </section>
      <section className="login-right-container">
        <section className="login-right-form-container">
          <ion-icon name="lock-closed"></ion-icon>
          <h3>Sign in to your account</h3>
          <form onSubmit={siginHandler}>
            <label>Username</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <Link>Forgot Password?</Link>
            <button type="submit" className="signin-btn">
              Sign in
            </button>
          </form>
          <p className="signup-text">
            I don't have an account. <button>Sign up</button>
          </p>
        </section>
      </section>
    </section>
  );
}

export default Index;
