import React from "react";
import Nav from "./Nav";
import "./Participants.css";
import Pin from "./icons8-location-100.png";

const arrayOfObjects = [
  {
    participant: "Dreamland Bar & Diner",
    description: "a funky spot for cocktails and comfort food.",
    website: "https://www.dreamlandfremont.com/",
    brandsOffered: ["Athletic Brewing Co", "Spiritless", "The Pathfinder"],
    mapLink:
      "https://www.google.com/maps/place/Dreamland+Bar+%26+Diner/@47.6501148,-122.3516283,15z/data=!4m2!3m1!1s0x0:0x58c5c6016bf51618?sa=X&ved=2ahUKEwjQm93Cnaj3AhUqIzQIHVWbCQIQ_BJ6BAheEAU",
  },
  {
    participant: "Liberty Bar",
    description: "a sleek bar with craft cocktails and sushi.",
    website: "http://www.libertybars.com/",
    brandsOffered: ["The Pathfinder", "Wilderton"],
    mapLink:
      "https://www.google.com/maps/place/Liberty/@47.623578,-122.3128231,15z/data=!4m2!3m1!1s0x0:0xa633c381ed937814?sa=X&ved=2ahUKEwjttMiy07v3AhVwJTQIHQGlArwQ_BJ6BAhvEAU",
  },
  {
    participant: "Life on Mars",
    description:
      "a stylish, music-focused bar with a wide range of cocktails and vegan fare.",
    website: "https://lifeonmarsseattle.com/",
    brandsOffered: ["Athletic Brewing Co and The Pathfinder"],
    mapLink:
      "https://www.google.com/maps/place/Life+On+Mars/@47.6143076,-122.3245432,17z/data=!3m1!4b1!4m5!3m4!1s0x54906b810cdc1c39:0x4290d427de0c3e04!8m2!3d47.6143076!4d-122.3223545",
  },
  {
    participant: "Navy Strength",
    description:
      "a place where classic & novel tiki drinks meet an eclectic bar menu in a sunny locale with globe-trotting decor.",
    website: "https://www.navystrengthseattle.com/",
    brandsOffered: ["Seedlip"],
    mapLink:
      "https://www.google.com/maps/place/Navy+Strength/@47.6153178,-122.3503983,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x5490154e65dc0d0b:0x7399e931193ff8c5!2sNavy+Strength!8m2!3d47.6153178!4d-122.3482096!10e1!3m4!1s0x5490154e65dc0d0b:0x7399e931193ff8c5!8m2!3d47.6153178!4d-122.3482096",
  },
  {
    participant: "Rob Roy",
    description:
      "a dark, clubby lounge where patrons sip classic and seasonal cocktails and tuck into small plates.",
    website: "http://www.robroyseattle.com/",
    brandsOffered: ["Seedlip", "The Pathfinder", "Wilderton"],
    mapLink:
      "https://www.google.com/maps/place/Rob+Roy/@47.6147616,-122.3487739,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x5490154e7fc7b323:0xe77d652d918c26a4!2sRob+Roy!8m2!3d47.6147616!4d-122.3465852!10e1!3m4!1s0x5490154e7fc7b323:0xe77d652d918c26a4!8m2!3d47.6147616!4d-122.3465852",
  },
  {
    participant: "Stampede Cocktail Club",
    description: "a cool, cozy bar with clever cocktails and dumplings.",
    website: "https://www.stampedecocktailclub.com/",
    brandsOffered: ["Lyre's", "The Pathfinder", "Wilderton"],
    mapLink:
      "https://www.google.com/maps/place/Stampede+Cocktail+Club/@47.6525473,-122.3568219,15z/data=!4m5!3m4!1s0x0:0x4f839f3593a28dfc!8m2!3d47.6525804!4d-122.3568056",
  },
  {
    participant: "Trade Winds Tavern",
    description: "an inclusive corner pub meets sports club",
    website: "https://www.tradewindstavern.net/",
    brandsOffered: ["Coming Soon!"],
    mapLink:
      "https://www.google.com/maps/place/Trade+Winds+Tavern/@47.6153124,-122.3506096,17z/data=!3m2!4b1!5s0x5490154e667e4acb:0x29312162c1c6555b!4m5!3m4!1s0x54901572c17af5cd:0xe11304da487225!8m2!3d47.6153124!4d-122.3484209",
  },
  {
    participant: "Vinnie's Wine Shop",
    description:
      "a chill, pocket-sized raw seafood bar specializing in local fare & a well-curated natural wine list.",
    website: "https://www.vinniesseattle.com/",
    brandsOffered: ["The Pathfinder"],
    mapLink:
      "https://www.google.com/maps/place/Vinnie's+Wine+Shop/@47.6152961,-122.35057,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x549015697eee3295:0xf3e206a62a35e22b!2sVinnie's+Wine+Shop!8m2!3d47.6152961!4d-122.3483813!10e1!3m4!1s0x549015697eee3295:0xf3e206a62a35e22b!8m2!3d47.6152961!4d-122.3483813",
  },
  /*
  {
    participant: "Watershed Pub & Kitchen",
    description: "",
    website: "https://www.watershedpub.com/",
    brandsOffered: "Lyre's",
    mapLink:
      "https://www.google.com/maps/place/Watershed+Pub+%26+Kitchen/@47.7019446,-122.3277247,17z/data=!3m1!4b1!4m5!3m4!1s0x549013ffb06eec81:0xd7854c72eda7bf6c!8m2!3d47.701941!4d-122.325536",
  } ,*/
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
            ({ participant, description, website, brandsOffered, mapLink }) => (
              <div key={participant} className="col-6 col-md-4">
                <div className="card">
                  <div className="internal-card">
                    <div className="card-body">
                      <table className="list-group list-group-flush">
                        <tr className="list-group-item">
                          <td>
                            <h5 className="card-title">
                              <a
                                href={website}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {participant}
                              </a>
                            </h5>
                            <p className="card-text">
                              {participant} is {description}
                            </p>
                          </td>
                        </tr>
                        <tr className="list-group-item">
                          <ul className="participant-brand-ul">
                            Low-and-No-Alcohol Offerings:
                            <br />
                            {brandsOffered.map((innerElement) => (
                              <li
                                className="participant-brand-li"
                                key={participant}
                              >
                                {innerElement}
                              </li>
                            ))}
                          </ul>
                        </tr>
                        <tr className="list-group-item direction-icon">
                          <a href={mapLink} target="_blank" rel="noreferrer">
                            <img className="pin" src={Pin} alt="Location Pin" />
                          </a>
                        </tr>
                      </table>
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
