import Logo from "./damp-and-dry-logo.png";
import "./App.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>* COMING SOON *</h1>
        <img className="App-logo" src={Logo} alt="Damp and Dry logo"></img>
        <nav>
          <ul>
            <li>
              <Link to="/brands">Participating Brands</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
