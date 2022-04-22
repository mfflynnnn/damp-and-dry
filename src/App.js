import Logo from "./damp-and-dry-logo.png";
import "./App.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<h1>* COMING SOON *</h1>*/}
        <img className="App-logo" src={Logo} alt="Damp and Dry logo"></img>
        <ul className="App-box">
          <li className="left-link">
            <Link to="/participants">PARTICIPANTS</Link>
          </li>
          <li className="spacer">•</li>
          <li className="right-link">
            <Link to="/brands">BRANDS</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
