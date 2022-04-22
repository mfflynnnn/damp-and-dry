import "./Nav.css";
import Logo from "./damp-and-dry-logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <Link className="navbar-brand" to="/">
        <img src={Logo} className="nav-logo" alt="Logo"></img>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/participants">
              Bars & Restaurants
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/brands">
              Brands
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
