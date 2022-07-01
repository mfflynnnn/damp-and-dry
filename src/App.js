import Logo from "./dampanddry.png";
import "./App.css";
//import CountdownTimer from "./CountdownTimer";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/about">
          <img className="App-logo" src={Logo} alt="Damp and Dry logo"></img>
        </Link>
        {/*<CountdownTimer /> */}
      </header>
    </div>
  );
}
