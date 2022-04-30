import React from "react";
import "./About.css";
//import Thermometer from "./Thermometer";
import Drip from "./icons8-water-96.png";
import Nav from "./Nav";

export default function About() {
  return (
    <div className="About">
      <header>
        <Nav />
        <div className="about-headers">
          <h1>Damp & Dry July</h1>
          <h2>Low-and-No-Alcohol Drinks for a Good Cause</h2>
        </div>
      </header>
      {/*<Thermometer /> */}
      <div className="container about-div">
        <div className="row">
          <div className="col-1">
            <img src={Drip} alt="Water drop" className="drip drip1"></img>
            <img src={Drip} alt="Water drop" className="drip drip2"></img>
          </div>
          <div className="col-10">
            <p className="about-p">
              Some see Dry July as a wellness exercise, others see it as a time
              of celebration, and some folx don't even know what we're talking
              about. So what is it, really? Dry July is a time to limit or
              completely omit alcohol from your diet - if you feel up to the
              challenge, that is. We can't tell you the exact history of Dry
              July (Wikipedia wasn't much help), but we CAN say that this year
              things are going to be a little different.
            </p>
            <p className="about-p">
              Damp & Dry July is proud to connect Seattleites with
              low-and-no-alcohol beverage options for a good cause. We have
              gathered a stellar list of bars, restaurants, and brands that are
              all here to help you on your path to be damp or dry (at least for
              July!) Participating{" "}
              <a href="./Participants.js">Bars & Restaurants</a> will serve up a
              dedicated menu of exquisite cocktails, beer, and wine that are all
              either very low in alcohol or completely alcohol free.
            </p>
            <p className="about-p">
              From every sale of non-alcoholic menu items at participating bars
              and restaurants, $1 will be donated to{" "}
              <a
                href="https://www.peerseattle.org/"
                target="_blank"
                rel="noreferrer"
              >
                Peer Seattle
              </a>
              . Peer Seattle is a local organization which "cultivates powerful,
              healthy lives by providing peer emotional support and development
              services to the LGBTQ community impacted by addiction, mental
              health and/or HIV." While Alcohol Use Disorder can impact anyone,
              the LGBTQIA+ community statistically suffers more heavily from
              alcohol abuse and addiction than their heterosexual counterparts.
              Damp & Dry July comes on the heels of Pride month, and we want to
              keep that positive and essential momentum going with meaningful
              action benefiting the local queer community.
            </p>
            <p className="about-p">
              To further the impact of the donations to Peer Seattle, each of
              our <a href="./Brands.js">Sponsoring Brands</a> have generously
              agreed to match a portion of the total donations.
            </p>
            <p className="about-p">
              Living booze-free for the month of July doesn't have to be boring,
              and it certainly shouldn't be bland! We're not here to take
              alcohol away from anyone; we're here to provide options to those
              who want them. Want to join us? Indulge a wide range of "damp and
              dry" beverages, all while feeling good about what you're doing for
              your body and for the community. See you at the bar!
            </p>
          </div>
          <div className="col-1">
            <img src={Drip} alt="Water drop" className="drip drip3"></img>
            <img src={Drip} alt="Water drop" className="drip drip4"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
