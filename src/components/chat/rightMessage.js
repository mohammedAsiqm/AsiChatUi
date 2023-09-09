import React from "react";
import "../../css/components/chat/rightMessage.css";

function RightMessage({ message }) {
  return (
    <div className="right-message">
      <p>
        {message} <span>10.01 am</span>
      </p>
    </div>
  );
}

export default RightMessage;
