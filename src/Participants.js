import React from "react";
import "./Participants.css";

const arrayOfObjects = [
  {
    participant: "Watershed Pub & Grill",
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
        <h1>Participating Bars & Restaurants</h1>
      </header>
      <div>
        <iframe
          className="map"
          title="Damp & Dry July Map"
          src="https://www.google.com/maps/d/u/0/embed?mid=1u5U1TJjpI32SU5RtMC0_hVQoqV7IhL53&ehbc=2E312F"
          width="500"
          height="400"
        ></iframe>
      </div>
      <div className="container">
        <div className="row">
          {arrayOfObjects.map(
            ({ participant, website, instagram, brandsOffered }) => (
              <div key={participant} className="col-6 col-md-4">
                <div className="card">
                  <div className="internal-card">
                    <div className="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <h5 className="card-title">{participant}</h5>
                          <p className="card-text">
                            {participant} offers no-and-low alcohol cocktails
                            featuring {brandsOffered}.
                          </p>
                        </li>
                        <li class="list-group-item">
                          Visit {participant} <br />
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
