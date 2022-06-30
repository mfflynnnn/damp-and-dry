import "./HorizontalNav.css";
import Logo from "./dampanddry.png";
import { Link } from "react-router-dom";

export default function HorizontalNav() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-light bg-light"
      id="horizontalNavbar"
    >
      <a href="/" id="hornav-logo">
        <img src={Logo} className="hornav-logo" alt="Logo"></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
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
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
