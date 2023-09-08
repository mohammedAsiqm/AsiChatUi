import React from "react";
import "../../css/pages/chat/chatContact.css";

function ChatContact({ profilePic, contactName = "", message = "", messageTime = "" }) {
  return (
    <div className="chat-contact-card-container">
      <div>
        <div className="chat-contact-profilepic">
            <img src={profilePic} width={50} />
        </div>
      </div>
      <div>
        <h5 className="chat-contact-name" >{contactName.substring(0, 13)}</h5>
        <h6 className="chat-contact-message" >
          {message.substring(0, 20)}
          {message.length > 20 ? " ....." : ""}{" "}
        </h6>
      </div>
      <div>
        <span className="chat-contact-message-time">{messageTime}</span>
      </div>
    </div>
  );
}

export default ChatContact;
