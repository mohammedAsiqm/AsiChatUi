import React, { useRef, useEffect } from "react";
import Header from "../../components/shared/header";
import ChatContact from "./chatContacts";
import LeftMessage from "../../components/chat/leftMessage";
import RightMessage from "../../components/chat/rightMessage";
import "../../css/pages/chat/index.css";
import DayHeader from "../../components/chat/dayHeader";

function Chat() {
  const chatMessagingAreaRef = useRef(null);

  useEffect(() => {
    chatMessagingAreaRef.current.scrollTop = chatMessagingAreaRef.current.scrollHeight;
  }, []);

  return (
    <section>
      <Header title="Chats" />
      <section className="chats-container">
        <section>
          <div className="chat-contact-search">
            <input type="text" placeholder="Search" />
          </div>
          <section className="chat-contact-list-container">
            {Array.from({ length: 15 }).map((item, i) => (
              <ChatContact profilePic={`https://randomuser.me/api/portraits/med/men/${i + 50}.jpg`} contactName={"Smith James"} message={i%2==0?"Asiq shall we connect a call":"I have an doubt in react js. What is react? How do you setup? From Where should i start?"} messageTime={"10.00 pm"} />
            ))}
          </section>
        </section>
        <section className="chat-messaging-container">
          <section className="chat-messaging-header">
            <div className="chat-messaging-header-profile">
              <div className="cmhp-img">
                <img src="https://randomuser.me/api/portraits/med/men/50.jpg" width={50} />
              </div>
              <div>
                <h5>Smith James</h5>
                <h6>Online</h6>
              </div>
            </div>
            <div>
              <ion-icon name="call"></ion-icon>
            </div>
          </section>
          <section className="chat-messaging-area-container" ref={chatMessagingAreaRef}>
            <DayHeader day="Yesterday" />
            <LeftMessage message={"Hey hi... How are you asiq?"} />
            <LeftMessage message={"I have an doubt in react js. What is react? How do you setup? From Where should i start?"} />
            <LeftMessage message={"asiq please call me when you free."} />
            <RightMessage message={"Hi smith, I'm good man. What about you?"} />
            <RightMessage message={"Ok man i'll call you evening."} />
            <LeftMessage message={"Sure, thanks asiq."} />
            <LeftMessage message={"Asiq shall we connect a call?"} />
            <RightMessage message={"Yeah smith"} />
            <DayHeader />
            <LeftMessage message={"Hey hi... How are you asiq?"} />
            <LeftMessage message={"I have an doubt in react js. What is react? How do you setup? From Where should i start?"} />
            <LeftMessage message={"asiq please call me when you free."} />
            <RightMessage message={"Hi smith, I'm good man. What about you?"} />
            <RightMessage message={"Ok man i'll call you evening."} />
            <LeftMessage message={"Sure, thanks asiq."} />
            <LeftMessage message={"Asiq shall we connect a call?"} />
            <RightMessage message={"Yeah smith"} />
          </section>
          <section className="chat-messaging-typing-container">
            <div>
              <input type="text" placeholder="Type your message here..." />
              <ion-icon name="send"></ion-icon>
            </div>
          </section>
        </section>
        <section className="chat-profile-detail-container">
          <section className="cpdc-profile">
            <div>
              <img src="https://randomuser.me/api/portraits/men/50.jpg" width={110} />
            </div>
            <h3>Smith James</h3>
          </section>
          <section className="cpdc-follow-details">
            <div>
              <h3>2900</h3>
              <h4>Followers</h4>
            </div>
            <div>
              <h3>230</h3>
              <h4>Following</h4>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Chat;
