import Logo from "./damp-and-dry-logo.png";
import "./App.css";
import CountdownTimer from "./CountdownTimer";
//import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<h1>* COMING SOON *</h1>*/}
        <a href="./About">
          <img className="App-logo" src={Logo} alt="Damp and Dry logo"></img>
        </a>
        {/*        <ul className="App-box">
          <li className="left-link">
            <Link to="/about">about</Link>
          </li>
          <li className="spacer">•</li>
          <li className="middle-link">
            <Link to="/participants">bars & restaurants</Link>
          </li>
          <li className="spacer">•</li>
          <li className="right-link">
            <Link to="/brands">brands</Link>
          </li>
  </ul> */}
        <CountdownTimer />
      </header>
    </div>
  );
}
