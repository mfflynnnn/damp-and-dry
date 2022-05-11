import React from "react";
import Nav from "./Nav";
import "./Brands.css";
import ATB from "./ATB.png";
import ABC from "./ABC.png";
import Aperol from "./Aperol.png";
import Dhos from "./Dhos.png";
//import Dry from "./Dry.png";
//import FreeSpirits from "./Free-Spirits.png";
import Gruvi from "./Gruvi.png";
import Joyus from "./Jøyus.png";
//import Lyres from "./Lyres.png";
//import Monday from "./Monday.png";
import Noughty from "./Noughty.png";
import Partake from "./Partake.png";
//import Ritual from "./Ritual.png";
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
    brand: "Athletic Brewing Company",
    website: "https://athleticbrewing.com/",
    instagram: "https://www.instagram.com/athleticbrewing/",
    logo: ABC,
    description:
      "award-winning, vegan-friendly, non-alcoholic beer, fit for all times.",
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
    brand: "Dhōs",
    website: "https://dhosspirits.com/",
    instagram: "https://www.instagram.com/dhosspirits/",
    logo: Dhos,
    description: "great tasting handcrafted non-alcoholic spirits.",
  },
  /*
  {
    brand: "Dry Soda",
    website: "https://drinkdry.com/",
    instagram: "https://www.instagram.com/drysoda/",
    logo: Dry,
    description: "",
  },
  {
    brand: "Free Spirits",
    website: "https://drinkfreespirits.com/",
    instagram: "https://www.instagram.com/drinkfreespirits/",
    logo: FreeSpirits,
    description: "",
  },
  */
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
  /*
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
*/
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
  /*
  {
    brand: "Ritual",
    website: "https://www.ritualzeroproof.com/",
    instagram: "https://www.instagram.com/ritualzeroproof/",
    logo: Ritual,
    description: "",
  },
*/
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
      "a fermented and distilled hemp-based liquid with the intense characteristics of a spirit, with none of the harmful effects of alcohol.",
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
                        alt="Brands"
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
