import React from "react";
import Header from "../../components/shared/header";
import ChatContact from "./chatContacts";
import "../../css/pages/chat/index.css";

function Chat() {
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
              <ChatContact profilePic={`https://randomuser.me/api/portraits/med/men/${i + 50}.jpg`} contactName={"Mohammed Asiq"} message={"hi"} messageTime={"10.00 pm"} />
            ))}
          </section>
        </section>
        <section className="chat-messaging-container" >
            <section className="chat-messaging-header" >
                <div className="chat-messaging-header-profile" >
                    <div className="cmhp-img" >
                        <img src="https://randomuser.me/api/portraits/med/men/50.jpg" width={50} />
                    </div>
                    <div>
                        <h5>Mohammed Asiq</h5>
                        <h6>Online</h6>
                    </div>
                </div>
                <div><ion-icon name="call"></ion-icon></div>
            </section>
            <section className="chat-messaging-area-container" >

            </section>
            <section className="chat-messaging-typing-container" >
                <input type="text" placeholder="Type your message here..." />
            </section>
        </section>
        <section>3</section>
      </section>
    </section>
  );
}

export default Chat;
