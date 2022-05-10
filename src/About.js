import React from "react";
import "./About.css";
import Thermometer from "./Thermometer";
import Hero from "./Hero.js";
//import Slide1 from "./slide-1.png";
//import Slide2 from "./slide-2.png";
//import Slide3 from "./slide-3.png";
import Fluid from "./Fluid.svg";
import Nav from "./Nav";

export default function About() {
  return (
    <div className="About">
      <header>
        <Nav />
      </header>
      <div className="container-fluid">
        <div
          className="row hero-block"
          style={{ backgroundImage: `url(${Fluid})` }}
        >
          <div className="col-12 video">
            <Hero />
          </div>
        </div>
        <div className="row">
          <div className="col-3 sidebar">
            <Thermometer />
          </div>
          <div className="col-9 main-content">
            <div className="row">
              <h1>Feel Good While You Do Good</h1>
            </div>
            <div className="row perks">
              <div className="row perks-headers">
                <div className="col-4">
                  <h2>Improve Your Health</h2>
                </div>
                <div className="col-4">
                  <h2>Support Charity</h2>
                </div>
                <div className="col-4">
                  <h2>Enjoy the Good Times</h2>
                </div>
              </div>
              <div className="col-4">
                <p>
                  Damp & Dry July is for anyone who wants to feel good and take
                  care of their health and wellness. The health benefits from
                  reducing or eliminating alcohol from your diet are many, and
                  can include better sleep, clearer skin, weight loss, improved
                  mental health, and more.
                </p>
              </div>
              <div className="col-4">
                <p>
                  Participating local businesess will be donating $1 to Peer
                  Seattle for every low-and-no-alcohol beverage sold. Peer
                  Seattle supports the LGBTQIA+ community with mental health
                  resources, addiction recovery services, and support for those
                  with HIV/AIDS.
                </p>
              </div>
              <div className="col-4">
                <p>
                  Going "damp" or "dry" doesn't need to be boring, bland, or
                  lonely. Enjoy the ritual of a night out with friends, while
                  remaining in control and in your element. Feel clear headed
                  the next day, skip the regrets, and remember the great
                  memories you made.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
