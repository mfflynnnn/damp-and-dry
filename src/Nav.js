import "./Nav.css";
import Logo from "./dampanddry1.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="Nav">
      <nav
        id="sidebarMenu"
        className="collapse navbar-expand-lg d-lg-block sidebar collapse bg-white"
      >
        <a className="navbar-logo" href="/">
          <img src={Logo} className="nav-logo" alt="Logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#list-group"
          aria-controls="list-group"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="position-sticky">
          <div
            id="list-group"
            className="list-group list-group-flush mx-3 mt-4"
          >
            <Link
              to="/"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              About
            </Link>
            <Link
              to="/participants"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              Bars & Restaurants
            </Link>
            <Link
              to="/brands"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              Brands
            </Link>
            <Link
              to="/contact"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
