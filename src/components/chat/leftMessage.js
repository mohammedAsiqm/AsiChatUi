import React from "react";
import "../../css/components/chat/leftMessage.css";

function LeftMessage({message}) {
  return (
    <div className="left-message">
      <p>
        {message} <span>10.00 am</span>
      </p>
    </div>
  );
}

export default LeftMessage;
