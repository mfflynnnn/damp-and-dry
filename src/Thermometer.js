import React from "react";
import ReactDOM from "react-dom";
import injectSheet from "react-jss";
import "./Thermometer.css";

export default function Thermometer() {
  const styles = {
    countdownWrap: {
      width: "100%",
      height: "300px",
      // border: '1px solid black',
      padding: "20px",
      fontFamily: "arial",
      maxWidth: "650px",
      margin: "150px auto 300px",
    },
    goal: {
      fontSize: "48px",
      textAlign: "right",
      color: "#fff",
      "@media only screen and(max - width: 640px)": {
        textAlign: "center",
      },
    },
    glass: {
      width: "100%",
      height: "20px",
      background: "#c7c7c7",
      borderRadius: "10px",
      float: "left",
      overflow: "hidden",
    },
    progress: {
      float: "left",
      width: "5%",
      height: "20px",
      background: "#ff5d50",
      zIndex: 333,
      // borderRadius: '5px',
    },
    goalStat: {
      width: "25%",
      // height: '30px',
      padding: "10px",
      float: "left",
      margin: 0,
      color: "#fff",
      "@media only screen and(max - width: 640px)": {
        width: "50%",
        textAlign: "center",
      },
    },
    block: {
      display: "block",
    },
    goalLabel: {
      composes: "$block",
    },
    goalNumber: {
      composes: "$block",
      fontWeight: "bold",
    },
  };

  const Thermometer = ({ classes }) => (
    <div className={classes.root}>
      <div className={classes.countdownWrap}>
        <div className={classes.goal}>$20,000</div>
        <div className={classes.glass}>
          <div className={classes.progress} />
        </div>
        <div className={classes.goalStat}>
          <span className={classes.goalNumber}>5%</span>
          <span className={classes.goalLabel}>Funded</span>
        </div>
        <div className={classes.goalStat}>
          <span className={classes.goalNumber}>$1,000</span>
          <span className={classes.goalLabel}>Raised</span>
        </div>
        <div className={classes.goalStat}>
          <span className={classes.goalNumber}>
            <div id="countdown">92</div>
          </span>
          <span className={classes.goalLabel}>Days to Go</span>
        </div>
        <div className={classes.goalStat}>
          <span className={classes.goalNumber}>1</span>
          <span className={classes.goalLabel}>Donors</span>
        </div>
      </div>
    </div>
  );

  const StyledApp = injectSheet(styles)(Thermometer);

  const rootElement = document.getElementById("root");
  ReactDOM.render(<StyledApp />, rootElement);
}
