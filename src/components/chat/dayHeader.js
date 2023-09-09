import React from "react";
import "../../css/components/chat/dayHeader.css";

function DayHeader({ day = "Today" }) {
  return (
    <div className="day-header-container">
      <p>{day}</p>
    </div>
  );
}

export default DayHeader;
