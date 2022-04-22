import React from "react";
import Nav from "./Nav";
import "./Participants.css";
import Pin from "./icons8-location-100.png";

const arrayOfObjects = [
  {
    participant: "Life on Mars",
    website: "https://lifeonmarsseattle.com/",
    brandsOffered: "Athletic Brewing Co and The Pathfinder",
    region: "on Capitol Hill",
    mapLink:
      "https://www.google.com/maps/place/Life+On+Mars/@47.6143076,-122.3245432,17z/data=!3m1!4b1!4m5!3m4!1s0x54906b810cdc1c39:0x4290d427de0c3e04!8m2!3d47.6143076!4d-122.3223545",
  },
  {
    participant: "",
    website: "",
    instagram: "",
    brandsOffered: ["", ""],
  },
  {
    participant: "",
    website: "",
    instagram: "",
    brandsOffered: ["", ""],
  },
  {
    participant: "",
    website: "",
    instagram: "",
    brandsOffered: ["", ""],
  },
  {
    participant: "",
    website: "",
    instagram: "",
    brandsOffered: ["", ""],
  },
  {
    participant: "",
    website: "",
    instagram: "",
    brandsOffered: ["", ""],
  },
  {
    participant: "",
    website: "",
    instagram: "",
    brandsOffered: ["", ""],
  },
  {
    participant: "",
    website: "",
    instagram: "",
    brandsOffered: ["", ""],
  },
  {
    participant: "",
    website: "",
    instagram: "",
    brandsOffered: ["", ""],
  },
];

export default function Participants() {
  return (
    <div className="participants">
      <header>
        <Nav />
        <h1>Participating Bars & Restaurants</h1>
      </header>
      <div className="container">
        <div className="row row1">
          <iframe
            className="map"
            title="Damp & Dry July Map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1u5U1TJjpI32SU5RtMC0_hVQoqV7IhL53&ehbc=2E312F"
            width="500"
            height="400"
          ></iframe>
        </div>
        <div className="row row2">
          {arrayOfObjects.map(
            ({ participant, website, brandsOffered, region, mapLink }) => (
              <div key={participant} className="col-6 col-md-4">
                <div className="card">
                  <div className="internal-card">
                    <div className="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <h5 className="card-title">
                            <a href={website} target="_blank" rel="noreferrer">
                              {participant}
                            </a>
                          </h5>
                          <p className="card-text">
                            {participant} has no-and-low offerings featuring
                            brands such as {brandsOffered}.
                          </p>
                        </li>
                        <li class="list-group-item">
                          <a href={mapLink} target="_blank" rel="noreferrer">
                            <img className="pin" src={Pin} alt="Location Pin" />
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
