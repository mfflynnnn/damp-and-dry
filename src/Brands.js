import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import HorizontalNav from "./HorizontalNav";
import "./Brands.css";
import ATB from "./ATB.png";
import ABC from "./ABC.png";
import Aperol from "./Aperol.png";
import Buzzkill from "./Buzzkill.png";
import Dhos from "./Dhos.png";
import Dry from "./Dry.png";
import Giffard from "./Giffard.png";
import Gruvi from "./Gruvi.png";
import Joyus from "./Jøyus.png";
import Lyres from "./Lyres.png";
import NLL from "./NLL.png";
import Noughty from "./Noughty.png";
import Partake from "./Partake.png";
import Ritual from "./Ritual.png";
import Spiritless from "./Spiritless.png";
import Pathfinder from "./The-Pathfinder.png";
import Wilderton from "./Wilderton.png";

const arrayOfObjects = [
  {
    brand: "All The Bitter",
    website: "https://allthebitter.com/",
    instagram: "https://www.instagram.com/allthebitter",
    logo: ATB,
    description:
      "classically inspired alcohol-free cocktail bitters that lift the spirit.",
  },
  {
    brand: "Aperol",
    website: "https://www.aperol.com/",
    instagram: "https://www.instagram.com/aperolspritzofficial/",
    logo: Aperol,
    description:
      "a unique bittersweet low-alcohol orange aperitivo for a refreshing and complex experience.",
  },
  {
    brand: "Athletic Brewing Co.",
    website: "https://athleticbrewing.com/",
    instagram: "https://www.instagram.com/athleticbrewing/",
    logo: ABC,
    description:
      "award-winning, vegan-friendly, non-alcoholic beer, fit for all times.",
  },
  {
    brand: "Buzzkill",
    website: "https://buzzkillwines.com/",
    instagram: "https://www.instagram.com/buzzkillwines/?hl=en",
    logo: Buzzkill,
    description:
      "non-alcoholic sauv blanc for people who can’t, shouldn’t, or don’t want to get f#^*ed up.",
  },
  {
    brand: "Dhōs",
    website: "https://dhosspirits.com/",
    instagram: "https://www.instagram.com/dhosspirits/",
    logo: Dhos,
    description:
      "great tasting handcrafted non-alcoholic spirits in three fine expressions.",
  },
  {
    brand: "Dry",
    website: "https://drinkdry.com/",
    instagram: "https://www.instagram.com/drysoda/",
    logo: Dry,
    description:
      "Dry Botanical Bubbly: the zero-proof option for every celebration.",
  },
  {
    brand: "Giffard",
    website: "https://backbarproject.com/portfolio/giffard/",
    instagram: "https://www.instagram.com/backbarproject/",
    logo: Giffard,
    description: "complex, versatile, sophisticated bar syrups.",
  },
  {
    brand: "Grüvi",
    website: "https://www.getgruvi.com/",
    instagram: "https://www.instagram.com/getgruvi/",
    logo: Gruvi,
    description:
      "refreshing bevs without the alcohol, so you can lose the alcohol, not the flavor.",
  },
  {
    brand: "Jøyus",
    website: "https://drinkjoyus.com/",
    instagram: "https://www.instagram.com/drinkjoyus/",
    logo: Joyus,
    description:
      "non-alcoholic wine that not only tastes like wine, but tastes like great wine.",
  },
  {
    brand: "Lyre's",
    website: "https://lyres.com/",
    instagram: "https://www.instagram.com/lyresspiritco/",
    logo: Lyres,
    description:
      "the most diverse and awarded non-alcoholic spirits in the world. Stay Spirited. Make it a Lyre’s",
  },
  {
    brand: "NLL",
    website: "https://us.salcombegin.com/new-london-light",
    instagram: "https://www.instagram.com/newlondonlight/?hl=en",
    logo: NLL,
    description:
      "a bold collection of non-alcoholic spirits and aperitifs, bringing innovative flavour combinations into a new era of taste.",
  },
  {
    brand: "Noughty",
    website: "https://noughtyaf.com/",
    instagram: "https://www.instagram.com/noughtyaf/",
    logo: Noughty,
    description:
      "alcohol-free wine that is Certified Organic, Vegan, and Halal.",
  },
  {
    brand: "Partake",
    website: "https://drinkpartake.com/",
    instagram: "https://www.instagram.com/partakebrewing/",
    logo: Partake,
    description:
      "a wide selection of authentically brewed, low-calorie-count, non-alcoholic beer.",
  },
  {
    brand: "Ritual",
    website: "https://www.ritualzeroproof.com/",
    instagram: "https://www.instagram.com/ritualzeroproof/",
    logo: Ritual,
    description:
      "makes 'liquor replacements', with zero calories, zero alcohol, and zero regrets.",
  },
  {
    brand: "Spiritless",
    website: "https://spiritless.com/",
    instagram: "https://www.instagram.com/drinkspiritless/",
    logo: Spiritless,
    description:
      "non-alcoholic spirits for the people who want to live fully but celebrate differently.",
  },
  {
    brand: "The Pathfinder",
    website: "https://drinkthepathfinder.com/",
    instagram: "https://www.instagram.com/drinkthepathfinder/",
    logo: Pathfinder,
    description:
      "a fermented and distilled hemp-based liquid with all the intense characteristics of a spirit. Be a true trailblazer.",
  },
  {
    brand: "Wilderton",
    website: "https://wildertonfree.com/",
    instagram: "https://www.instagram.com/wilderton_free/",
    logo: Wilderton,
    description:
      "provocative bar staples that are reminiscent of traditional spirits but free from the confines of alcohol.",
  },
];

export default function Brands() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <div className="brands row">
          <div className="nav-container col-2">
            <Nav />
          </div>
          <div className="col-10">
            <header>
              <span>
                <h1>Brands</h1>
              </span>
              <span>
                <h6>(A to Z)</h6>
              </span>
            </header>
            <div className="container">
              <div className="row">
                {arrayOfObjects.map(
                  ({ brand, website, instagram, logo, description }) => (
                    <div key={brand} className="col-12 col-md-6 col-lg-4">
                      <div className="card">
                        <div className="internal-card">
                          <a href={website} target="_blank" rel="noreferrer">
                            <img
                              src={logo}
                              className="card-img-top"
                              alt="Brands"
                            ></img>
                          </a>
                          <div className="card-body card-container">
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">
                                <div className="row row-1">
                                  <div className="col">
                                    <h5 className="card-title">{brand}</h5>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row row-2">
                                  <div className="col">
                                    <p className="card-text">
                                      {brand} makes {description}
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <div className="row row-3">
                                <div className="col">
                                  <li className="list-group-item">
                                    <a
                                      href={website}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      Website
                                    </a>{" "}
                                    |{" "}
                                    <a
                                      href={instagram}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      Instagram
                                    </a>
                                  </li>
                                </div>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="brands row">
          <div className="horizontalNav-container">
            <HorizontalNav />
          </div>
          <div className="col">
            <header>
              <h1>Brands (A to Z)</h1>
            </header>
            <div className="container">
              <div className="row">
                {arrayOfObjects.map(
                  ({ brand, website, instagram, logo, description }) => (
                    <div key={brand} className="col-12 col-md-6 col-lg-4">
                      <div className="card">
                        <div className="internal-card">
                          <a href={website} target="_blank" rel="noreferrer">
                            <img
                              src={logo}
                              className="card-img-top"
                              alt="Brands"
                            ></img>
                          </a>
                          <div className="card-body card-container">
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">
                                <div className="row row-1">
                                  <div className="col">
                                    <h5 className="card-title">{brand}</h5>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="row row-2">
                                  <div className="col">
                                    <p className="card-text">
                                      {brand} makes {description}
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <div className="row row-3">
                                <div className="col">
                                  <li className="list-group-item">
                                    <a
                                      href={website}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      Website
                                    </a>{" "}
                                    |{" "}
                                    <a
                                      href={instagram}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      Instagram
                                    </a>
                                  </li>
                                </div>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
