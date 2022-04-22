import React from "react";
import Nav from "./Nav";
import "./Participants.css";
import Pin from "./icons8-location-100.png";

const arrayOfObjects = [
  {
    participant: "Dreamland Bar & Diner",
    website: "https://www.dreamlandfremont.com/",
    brandsOffered: ["Athletic Brewing Co"],
    mapLink:
      "https://www.google.com/maps/place/Dreamland+Bar+%26+Diner/@47.6501148,-122.3516283,15z/data=!4m2!3m1!1s0x0:0x58c5c6016bf51618?sa=X&ved=2ahUKEwjQm93Cnaj3AhUqIzQIHVWbCQIQ_BJ6BAheEAU",
  },
  {
    participant: "Life on Mars",
    website: "https://lifeonmarsseattle.com/",
    brandsOffered: "Athletic Brewing Co and The Pathfinder",
    mapLink:
      "https://www.google.com/maps/place/Life+On+Mars/@47.6143076,-122.3245432,17z/data=!3m1!4b1!4m5!3m4!1s0x54906b810cdc1c39:0x4290d427de0c3e04!8m2!3d47.6143076!4d-122.3223545",
  },
  {
    participant: "Watershed Pub & Kitchen",
    website: "https://www.watershedpub.com/",
    brandsOffered: ["Lyre's"],
    mapLink:
      "https://www.google.com/maps/place/Watershed+Pub+%26+Kitchen/@47.7019446,-122.3277247,17z/data=!3m1!4b1!4m5!3m4!1s0x549013ffb06eec81:0xd7854c72eda7bf6c!8m2!3d47.701941!4d-122.325536",
  },
];

export default function Participants() {
  return (
    <div className="participants">
      <header>
        <Nav />
        <h1>Participating Bars & Restaurants</h1>
        <h6>(A to Z)</h6>
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
            ({ participant, website, brandsOffered, mapLink }) => (
              <div key={participant} className="col-6 col-md-4">
                <div className="card">
                  <div className="internal-card">
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <h5 className="card-title">
                            <a href={website} target="_blank" rel="noreferrer">
                              {participant}
                            </a>
                          </h5>
                          <p className="card-text">
                            {participant} has no-and-low offerings, featuring
                            brands such as {brandsOffered}.
                          </p>
                        </li>
                        <li className="list-group-item">
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
