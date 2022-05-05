import React from "react";
import "./About.css";
//import Thermometer from "./Thermometer";
import Slide1 from "./slide-1.png";
import Slide2 from "./slide-2.png";
import Slide3 from "./slide-3.png";
import Nav from "./Nav";

export default function About() {
  return (
    <div className="About">
      <header>
        <Nav />
        <div className="about-headers">
          <h1>Damp & Dry July</h1>
          <h2>Drinking "Low-and-No" for a Cause</h2>
        </div>
      </header>
      {/*<div className="row">
         <div className="col-3">
          <Thermometer />
  </div>*/}
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade col-9"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              src={Slide1}
              className="d-block w-100"
              alt="Carousel slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Slide2}
              className="d-block w-100"
              alt="Carousel slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Slide3}
              className="d-block w-100"
              alt="Carousel slide 3"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    //</div>
  );
}
