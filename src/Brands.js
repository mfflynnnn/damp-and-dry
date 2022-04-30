import React from "react";
import Nav from "./Nav";
import "./Brands.css";
import ATB from "./ATB.png";
//import ABC from "./ABC.png";
//import Dhos from "./Dhos.png";
//import Dry from "./Dry.png";
//import FBFW from "./FBFW.png";
//import FreeSpirits from "./Free-Spirits.png";
//import Joyus from "./Jøyus.png";
//import Lyres from "./Lyres.png";
//import Monday from "./Monday.png";
//import Noughty from "./Noughty.png";
//import Partake from "./Partake.png";
//import Ritual from "./Ritual.png";
//import Spiritless from "./Spiritless.png";
//import Pathfinder from "./The-Pathfinder.png";
//import Wilderton from "./Wilderton.png";

const arrayOfObjects = [
  {
    brand: "All The Bitter",
    website: "https://allthebitter.com/",
    instagram: "https://www.instagram.com/allthebitter",
    logo: ATB,
    description:
      "classically inspired alcohol-free cocktail bitters that lift the spirit.",
  },
  /*{
    brand: "Athletic Brewing Company",
    website: "https://athleticbrewing.com/",
    instagram: "https://www.instagram.com/athleticbrewing/",
    logo: ABC,
    description: "",
  },
  {
    brand: "Dhōs",
    website: "https://dhosspirits.com/",
    instagram: "https://www.instagram.com/dhosspirits/",
    logo: Dhos,
    description: "",
  },
  {
    brand: "Dry Soda",
    website: "https://drinkdry.com/",
    instagram: "https://www.instagram.com/drysoda/",
    logo: Dry,
    description: "",
  },
  {
    brand: "For Bitter For Worse",
    website: "https://forbitterforworse.com/",
    instagram: "https://www.instagram.com/forbitterforworse/",
    logo: FBFW,
    description: "",
  },
  {
    brand: "Free Spirits",
    website: "https://drinkfreespirits.com/",
    instagram: "https://www.instagram.com/drinkfreespirits/",
    logo: FreeSpirits,
    description: "",
  },
  {
    brand: "Jøyus",
    website: "https://drinkjoyus.com/",
    instagram: "https://www.instagram.com/drinkjoyus/",
    logo: Joyus,
    description: "",
  },
  {
    brand: "Lyre's",
    website: "https://lyres.com/",
    instagram: "https://www.instagram.com/lyresspiritco/",
    logo: Lyres,
    description: "",
  },
  {
    brand: "Monday",
    website: "https://drinkmonday.co/",
    instagram: "https://www.instagram.com/drinkmonday/",
    logo: Monday,
    description: "",
  },
  {
    brand: "Noughty",
    website: "https://noughtyaf.com/",
    instagram: "https://www.instagram.com/noughtyaf/",
    logo: Noughty,
    description: "",
  },
  {
    brand: "Partake",
    website: "https://drinkpartake.com/",
    instagram: "https://www.instagram.com/partakebrewing/",
    logo: Partake,
    description: "",
  },
  {
    brand: "Ritual",
    website: "https://www.ritualzeroproof.com/",
    instagram: "https://www.instagram.com/ritualzeroproof/",
    logo: Ritual,
    description: "",
  },
  {
    brand: "Spiritless",
    website: "https://spiritless.com/",
    instagram: "https://www.instagram.com/drinkspiritless/",
    logo: Spiritless,
    description: "",
  },
  {
    brand: "The Pathfinder",
    website: "https://drinkthepathfinder.com/",
    instagram: "https://www.instagram.com/drinkthepathfinder/",
    logo: Pathfinder,
    description: "",
  },
  {
    brand: "Wilderton",
    website: "https://wildertonfree.com/",
    instagram: "https://www.instagram.com/wilderton_free/",
    logo: Wilderton,
    description: "",
  }, */
];

export default function Brands() {
  return (
    <div className="brands">
      <header>
        <Nav />
        <h1>Brands</h1>
        <h6>(A to Z)</h6>
      </header>
      <div className="container">
        <div className="row">
          {arrayOfObjects.map(
            ({ brand, website, instagram, logo, description }) => (
              <div key={brand} className="col-6 col-md-4">
                <div className="card">
                  <div className="internal-card">
                    <a href={website} target="_blank" rel="noreferrer">
                      <img
                        src={logo}
                        className="card-img-top"
                        alt="Brand logo"
                      ></img>
                    </a>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <h5 className="card-title">{brand}</h5>
                          <p className="card-text">
                            {brand} makes {description}
                          </p>
                        </li>
                        <li className="list-group-item">
                          Visit {brand} <br />
                          <a href={website} target="_blank" rel="noreferrer">
                            Website
                          </a>{" "}
                          |{" "}
                          <a href={instagram} target="_blank" rel="noreferrer">
                            Instagram
                          </a>
                        </li>
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
  );
}
