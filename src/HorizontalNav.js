import "./HorizontalNav.css";
import Logo from "./dampanddry.png";
import { Link } from "react-router-dom";

export default function HorizontalNav() {
  return (
    <div className="horizontalNav">
      <nav
        className="navbar fixed-top navbar-light bg-light"
        id="horizontalNavbar"
      >
        <div className="container-fluid">
          <a href="/">
            <img src={Logo} className="hornav-logo" alt="Logo"></img>
          </a>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarToggleExternalContent3"
            aria-controls="navbarToggleExternalContent3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
      <div className="collapse" id="navbarToggleExternalContent3">
        <div className="bg-light shadow-3 p-4 list-group">
          <button className="btn btn-link btn-block border-bottom m-0">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </button>
          <button className="btn btn-link btn-block border-bottom m-0">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </button>
          <button className="btn btn-link btn-block m-0">
            <Link className="nav-link" to="/participants">
              Bars & Restaurants
            </Link>
          </button>
          <button className="btn btn-link btn-block m-0">
            <Link className="nav-link" to="/brands">
              Brands
            </Link>
          </button>
          <button className="btn btn-link btn-block m-0">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
