import React from "react";
import Nav from "./Nav";
import "./Brands.css";
import ATB from "./atb.jpeg";
import ABC from "./ABC.png";
import Dhos from "./Dhos.png";

const arrayOfObjects = [
  {
    brand: "All The Bitter",
    website: "https://allthebitter.com/",
    instagram: "https://www.instagram.com/allthebitter",
    logo: ATB,
    matching: "up to $500",
  },
  {
    brand: "Athletic Brewing Company",
    website: "",
    instagram: "",
    logo: ABC,
    matching: "10% of total donation",
  },
  {
    brand: "Dhōs",
    website: "",
    instagram: "",
    logo: Dhos,
    matching: "up to 50%",
  },
  { brand: "Dry Soda", website: "", instagram: "", logo: "", matching: "" },
  {
    brand: "For Bitter For Worse",
    website: "",
    instagram: "",
    logo: "",
    matching: "",
  },
  { brand: "Free Spirits", website: "", instagram: "", logo: "", matching: "" },
  { brand: "Jøyus", website: "", instagram: "", logo: "", matching: "" },
  { brand: "Lyre's", website: "", instagram: "", logo: "", matching: "" },
  { brand: "Monday", website: "", instagram: "", logo: "", matching: "" },
  { brand: "Noughty", website: "", instagram: "", logo: "", matching: "" },
  { brand: "Ritual", website: "", instagram: "", logo: "", matching: "" },
  { brand: "Spiritless", website: "", instagram: "", logo: "", matching: "" },
  {
    brand: "The Pathfinder",
    website: "",
    instagram: "",
    logo: "",
    matching: "",
  },
  { brand: "Wilderton", website: "", instagram: "", logo: "", matching: "" },
];

export default function Brands() {
  return (
    <div className="brands">
      <header>
        <Nav />
        <h1>Brands</h1>
      </header>
      <div className="container">
        <div className="row">
          {arrayOfObjects.map(
            ({ brand, website, instagram, logo, matching }) => (
              <div key={brand} className="col-6 col-md-4">
                <div className="card">
                  <div className="internal-card">
                    <img
                      src={logo}
                      className="card-img-top"
                      alt="Brand logo"
                    ></img>
                    <div className="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <h5 className="card-title">{brand}</h5>
                          <p className="card-text">
                            {brand} is matching {matching}.
                          </p>
                        </li>
                        <li class="list-group-item">
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
