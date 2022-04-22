import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <p className="time">{value}</p>
      <div className="DHMS">{type}</div>
    </div>
  );
};

export default DateTimeDisplay;
