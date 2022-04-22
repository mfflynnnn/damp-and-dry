import React from "react";
import "./CountdownTimer.css";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <DateTimeDisplay value={days} type={"Days"} isDanger={false} />
      <p className="colon">:</p>
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      <p className="colon">:</p>
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <p className="colon">:</p>
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <div>
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
};

export default CountdownTimer;
