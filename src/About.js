import React from "react";
import "./About.css";
import Nav from "./Nav";
import Hero from "./Hero.js";
import Peer from "./peer-seattle_logo.png";
import Thermometer from "./Thermometer";

export default function About() {
  return (
    <div className="About row">
      <div className="nav-container col-2">
        <Nav />
      </div>
      <div className="About-content col-10">
        <div className="row hero-block">
          <div className="col-12 video">
            <h1>Welcome!</h1>
            <h2>Here's a little about us</h2>
            <Hero />
          </div>
        </div>
        <div className="row donation-row">
          <div className="col-lg-2 col-md-0"></div>
          <div className="col-lg-4 col-md-12 thermometer">
            <Thermometer />
          </div>
          <div className="col-lg-4 col-md-12">
            <img className="peer-logo" src={Peer} alt="Peer logo"></img>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=AFWVPSRLE2M7L"
              className="btn btn-primary"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              Donate to Peer Seattle
            </a>
          </div>
          <div className="col-lg-2 col-md-0"></div>
        </div>
        <div className="row main-content">
          <div className="col-12">
            <div className="row">
              <div className="col-12"></div>
              <h3 className="tagline">Feel Good While You Do Good</h3>
            </div>
            <div className="row perks">
              {/*<div className="row perks-headers">
              <div className="col-12"></div>
              <div className="col-12"></div>
              <div className="col-12"></div>
  </div>*/}
              <div className="col-12 col-lg-4">
                <h4>Improve Your Health</h4>
                <p>
                  Damp & Dry July is for anyone who wants to feel good and take
                  care of their health and wellness. The health benefits from
                  reducing or eliminating alcohol from your diet are many, and
                  can include better sleep, clearer skin, weight loss, improved
                  mental health, and more.
                </p>
                <hr></hr>
              </div>
              <div className="col-12 col-lg-4">
                <h4>Support Charity</h4>
                <p>
                  Participating local businesses are donating $1 to Peer Seattle
                  for every low-and-no-alcohol beverage sold. Peer Seattle
                  supports the LGBTQIA+ community with mental health resources,
                  addiction recovery services, and support for those with
                  HIV/AIDS.
                </p>
                <hr></hr>
              </div>
              <div className="col-12 col-lg-4">
                <h4>Enjoy the Good Times</h4>
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
