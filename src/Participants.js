import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import HorizontalNav from "./HorizontalNav";
import "./Participants.css";
import Pin from "./icon-pin.png";

const arrayOfObjects = [
  {
    participant: "Art of the Table",
    description:
      "an intimate eatery offering innovative locavore fare, with each course introduced by the chef-owner.",
    website: "https://www.artofthetable.net/",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/Art+of+the+Table/@47.652875,-122.3427833,15z/data=!4m5!3m4!1s0x0:0x3610df087cdfff7!8m2!3d47.6528053!4d-122.3427843",
  },
  {
    participant: "Boat Bar",
    description:
      "a Renee Erickson spot showcasing local oysters, inspired bites & libations in a splashy room.",
    website: "https://boatbarseattle.com/",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/Boat+Bar/@47.613057,-122.3271557,15z/data=!4m13!1m7!3m6!1s0x0:0x5aa023993964d77e!2sBoat+Bar!8m2!3d47.613048!4d-122.3183912!10e1!3m4!1s0x0:0x5aa023993964d77e!8m2!3d47.613048!4d-122.3183912",
  },
  {
    participant: "Broadcast Coffee - Roosevelt",
    description:
      "an independent roaster featuring artisanal espresso drinks & light fare in a sun-lit, minimalist space.",
    website: "https://broadcastcoffeeroasters.com/",
    brandsOffered: "Grüvi",
    mapLink:
      "https://www.google.com/maps/place/Broadcast+Coffee/@47.6762449,-122.317522,15z/data=!4m5!3m4!1s0x0:0x9f0e993ca3fb45a8!8m2!3d47.6762451!4d-122.3175054",
  },
  {
    participant: "Broadcast Coffee - Yesler",
    description:
      "an independent roaster featuring artisanal espresso drinks & light fare in a sun-lit, minimalist space.",
    website: "https://broadcastcoffeeroasters.com/",
    brandsOffered: "Grüvi",
    mapLink:
      "https://www.google.com/maps/place/Broadcast+Coffee+Roasters/@47.6139246,-122.3400029,14z/data=!4m9!1m2!2m1!1sbroadcast+coffee!3m5!1s0x54906ac18a03f09d:0x91cdd4adbbbc4ebb!8m2!3d47.6018046!4d-122.3065592!15sChBicm9hZGNhc3QgY29mZmVlIgOIAQFaEiIQYnJvYWRjYXN0IGNvZmZlZZIBC2NvZmZlZV9zaG9w",
  },
  {
    participant: "Carrello",
    description:
      "a roomy, rustic-chic space with handmade pastas plus an antipasti dim sum cart.",
    website: "https://www.carrellorestaurant.com/",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/Carrello/@47.6249584,-122.3206748,15z/data=!4m5!3m4!1s0x0:0xb18695eb858d14e6!8m2!3d47.6249584!4d-122.3206748",
  },
  {
    participant: "Civility & Unrest",
    description:
      "a plush, modern craft cocktail bar where drinks made with local spirits are paired with Northwest-inspired small plates.",
    website: "https://civilityandunrest.com/",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/Civility+%26+Unrest/@47.614832,-122.2007339,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x172be33bfa696b02!8m2!3d47.614832!4d-122.2007339",
  },
  {
    participant: "College Inn Pub",
    description:
      "a bustling bar with draft beers & wine, plus a small menu of American chow such as chili & sandwiches.",
    website: "https://www.thecollegeinnpub.com/",
    brandsOffered: "Giffard, Aperol, Athletic Brewing Co",
    mapLink:
      "https://www.google.com/maps/place/College+Inn+Pub/@47.6554861,-122.3129806,15z/data=!4m5!3m4!1s0x0:0x388472926b082e0a!8m2!3d47.6554861!4d-122.3129806",
  },
  {
    participant: "Cycle Dogs",
    description: "THE go-to spot for vegan fast food served in a casual space.",
    website: "https://cycle-dogs.square.site/",
    brandsOffered: "Wilderton, The Pathfinder",
    mapLink:
      "https://www.google.com/maps/place/Cycle+Dogs/@47.6683179,-122.3808423,17z/data=!4m12!1m6!3m5!1s0x549015b818b30625:0xda390ded2885ba7c!2sCycle+Dogs!8m2!3d47.6683255!4d-122.378742!3m4!1s0x549015b818b30625:0xda390ded2885ba7c!8m2!3d47.6683255!4d-122.378742",
  },
  {
    participant: "Deep Dive",
    description:
      "a posh, vintage-chic hideaway with a speakeasy vibe, offering cocktails and upscale European bar snacks.",
    website: "http://www.deepdiveseattle.com/",
    brandsOffered: "Wilderton, NLL, The Pathfinder",
    mapLink:
      "https://www.google.com/maps/place/Deep+Dive/@47.6156405,-122.3415608,17z/data=!4m12!1m6!3m5!1s0x549015b6f3091d2d:0x26b2ef29e9a9164a!2sDeep+Dive!8m2!3d47.6156405!4d-122.3393721!3m4!1s0x549015b6f3091d2d:0x26b2ef29e9a9164a!8m2!3d47.6156405!4d-122.3393721",
  },
  {
    participant: "Dreamland Bar & Diner",
    description: "a funky spot for cocktails and comfort food.",
    website: "https://www.dreamlandfremont.com/",
    brandsOffered: "Aperol, All The Bitter, Giffard",
    mapLink:
      "https://www.google.com/maps/place/Dreamland+Bar+%26+Diner/@47.6501148,-122.3516283,15z/data=!4m2!3m1!1s0x0:0x58c5c6016bf51618?sa=X&ved=2ahUKEwjQm93Cnaj3AhUqIzQIHVWbCQIQ_BJ6BAheEAU",
  },
  {
    participant: "Eight Row",
    description:
      "a stylish kitchen focusing on regionally sourced new American eats, plus a well-curated wine list.",
    website: "https://www.eightrow.com/",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/Eight+Row/@47.6800976,-122.3243827,15z/data=!4m5!3m4!1s0x0:0x6b99605c738dd9b5!8m2!3d47.6800976!4d-122.3243827",
  },
  {
    participant: "Foreign National",
    description:
      "a space for highbrow cocktails and snacks from around the globe, served in dark digs lit by a disco ball.",
    website: "https://www.foreignnationalbar.com/",
    brandsOffered: "The Pathfinder",
    mapLink:
      "https://www.google.com/maps/place/Foreign+National/@47.6142326,-122.3296399,17z/data=!3m1!4b1!4m5!3m4!1s0x54906acade27de6d:0x315374a72140050!8m2!3d47.6141927!4d-122.3274519",
  },
  {
    participant: "Hattie's Hat",
    description: "a funky spot for comfort food, cocktails, and live events.",
    website: "https://hatties-hat.com/",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/Hattie's+Hat+Restaurant/@47.666085,-122.383182,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x42aecee8b8768757!8m2!3d47.6661561!4d-122.3830924",
  },
  {
    participant: "Hazlewood",
    description:
      "a hip fixture serving craft cocktails in the rustic-chic main bar or the tiny upstairs loft.",
    website: "https://www.facebook.com/hazlewoodbar",
    brandsOffered: "Spiritless, The Pathfinder",
    mapLink:
      "https://www.google.com/maps/place/Hazlewood/@47.6684875,-122.3888928,17z/data=!4m13!1m7!3m6!1s0x0:0x93a0c24168b711e7!2sHazlewood!8m2!3d47.668537!4d-122.3867365!10e1!3m4!1s0x0:0x93a0c24168b711e7!8m2!3d47.668537!4d-122.3867365",
  },
  {
    participant: "Herb & Bitter Public House",
    description:
      "a Spanish-influenced bar & eatery serving up snacks & mains, cocktails & beer.",
    website: "https://www.herbandbitter.com/",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/Herb+%26+Bitter+Public+House/@47.62361,-122.3227747,17z/data=!4m13!1m7!3m6!1s0x0:0xa0ff2fdef2d3fe77!2sHerb+%26+Bitter+Public+House!8m2!3d47.62361!4d-122.320586!10e1!3m4!1s0x0:0xa0ff2fdef2d3fe77!8m2!3d47.62361!4d-122.320586",
  },
  /*
  {
    participant: "JarrBar",
    description:
      "a cool, cozy bar serving cocktails & Spanish libations served with Iberian-style small plates.",
    website: "http://www.jarrbar.com/",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/JarrBar/@47.6082299,-122.3429764,17z/data=!4m13!1m7!3m6!1s0x0:0x78d30d5e7c459304!2sJarrBar!8m2!3d47.608224!4d-122.3408324!10e1!3m4!1s0x0:0x78d30d5e7c459304!8m2!3d47.608224!4d-122.3408324",
  },
  */
  {
    participant: "Jules Maes Saloon",
    description:
      "an historic hangout serving pub grub, with a back room for live music, pinball, Ping-Pong & air hockey.",
    website: "https://www.julesmaessaloon.com/",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/Jules+Maes+Saloon/@47.5495806,-122.3174943,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xbd6ef184cc632568!8m2!3d47.5496054!4d-122.3174402",
  },
  {
    participant: "KAMP",
    description:
      "a chic destination opening July 2022, combining Jamaican flavor with California vibes.",
    website: "https://www.instagram.com/kampseattle/",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/KAMP/@47.623739,-122.2962827,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xf1f272a5df31bfb8!8m2!3d47.623739!4d-122.2962827",
  },
  {
    participant: "La Dive",
    description:
      "a cheery space with natural wine, plus frozen drinks and inventive snacks.",
    website: "https://www.ladiveseattle.com/",
    brandsOffered: "The Pathfinder, Athletic Brewing",
    mapLink:
      "https://www.google.com/maps/place/La+Dive/@47.6138934,-122.324682,17z/data=!4m13!1m7!3m6!1s0x54906b80cfd18cab:0xbeba7fb0c58f5ae3!2sLa+Dive!8m2!3d47.6138934!4d-122.3224933!10e1!3m4!1s0x54906b80cfd18cab:0xbeba7fb0c58f5ae3!8m2!3d47.6138934!4d-122.3224933",
  },
  {
    participant: "Lady Jaye",
    description:
      "a rustic-chic spot for smoked meats, sides, and cocktails plus a large outdoor fire pit.",
    website: "https://ladyjaye.com/",
    brandsOffered: "Athletic Brewing Co., Wilderton, The Pathfinder",
    mapLink:
      "https://www.google.com/maps/place/Lady+Jaye/@47.562216,-122.3891935,17z/data=!3m2!4b1!5s0x549040f994fc503b:0xee9c602a3f5c55bc!4m5!3m4!1s0x54904107ce9396cd:0xba6856cd77ac7fa3!8m2!3d47.5622124!4d-122.3870048",
  },
  {
    participant: "Lariat bar",
    description:
      "your White Center home for killer concessions and bodacious beverages.",
    website: "https://www.lariatbarseattle.com/",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/Lariat+bar/@47.5147867,-122.3554386,15z/data=!4m5!3m4!1s0x0:0x939ea113018f19c9!8m2!3d47.5147867!4d-122.3554386",
  },
  {
    participant: "Liberty Bar",
    description: "a sleek bar with craft cocktails and sushi.",
    website: "http://www.libertybars.com/",
    brandsOffered: "Jøyous, The Pathfinder, Wilderton",
    mapLink:
      "https://www.google.com/maps/place/Liberty/@47.623578,-122.3128231,15z/data=!4m2!3m1!1s0x0:0xa633c381ed937814?sa=X&ved=2ahUKEwjttMiy07v3AhVwJTQIHQGlArwQ_BJ6BAhvEAU",
  },
  {
    participant: "Life On Mars",
    description:
      "a stylish, music-focused bar with a wide range of cocktails and vegan fare.",
    website: "https://lifeonmarsseattle.com/",
    brandsOffered: "Athletic Brewing Co., NLL, The Pathfinder",
    mapLink:
      "https://www.google.com/maps/place/Life+On+Mars/@47.6143076,-122.3245432,17z/data=!3m1!4b1!4m5!3m4!1s0x54906b810cdc1c39:0x4290d427de0c3e04!8m2!3d47.6143076!4d-122.3223545",
  },
  {
    participant: "Mad Scientist Drink Fusion Lab",
    description:
      "a workshop experience offering fun and engaging education on cocktails and mocktails.",
    website:
      "https://www.airbnb.com/experiences/1782905?s=42&unique_share_id=6EC60763-B4AA-4A01-8A63-4FD90AE6ADE8&fbclid=IwAR2DTGa40CtfUKyieVQ6N-AhgGgiEnsC1ydMmuET_eOH3JMK_wXesF3hYVk&_branch_match_id=1070110074975433530&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT0zKS9LLTdWvrHCuDDKzSE0pSrJPS0rOyUyx9Sx3DDJyCXFPNDFwLkkL9a7MTA0LNPPTdcxId0%2FPdM0rdjasTPHNLXUNiU%2F19zD28vWOL49ILXYzzogMywYA4K%2FtrWAAAAA%3D",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/Greenfire+Loft/@47.6147659,-122.3282092,15z/data=!4m5!3m4!1s0x0:0x197419b4db166c27!8m2!3d47.6147659!4d-122.3282092",
  },
  {
    participant: "Navy Strength",
    description:
      "a place where classic & novel tiki drinks meet an eclectic bar menu in a sunny locale with globe-trotting decor.",
    website: "https://www.navystrengthseattle.com/",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/Navy+Strength/@47.6153178,-122.3503983,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x5490154e65dc0d0b:0x7399e931193ff8c5!2sNavy+Strength!8m2!3d47.6153178!4d-122.3482096!10e1!3m4!1s0x5490154e65dc0d0b:0x7399e931193ff8c5!8m2!3d47.6153178!4d-122.3482096",
  },
  {
    participant: "Rob Roy",
    description:
      "a dark, clubby lounge where patrons sip classic and seasonal cocktails and tuck into small plates.",
    website: "http://www.robroyseattle.com/",
    brandsOffered: "The Pathfinder, Wilderton",
    mapLink:
      "https://www.google.com/maps/place/Rob+Roy/@47.6147616,-122.3487739,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x5490154e7fc7b323:0xe77d652d918c26a4!2sRob+Roy!8m2!3d47.6147616!4d-122.3465852!10e1!3m4!1s0x5490154e7fc7b323:0xe77d652d918c26a4!8m2!3d47.6147616!4d-122.3465852",
  },
  {
    participant: "Rumba and Inside Passage",
    description:
      "a Caribbean-inspired bar with 200+ rums & a sophisticated '50s island vibe and Hemingway books.",
    website: "https://www.rumbaonpike.com/",
    brandsOffered: "Giffard, Wilderton, The Pathfinder",
    mapLink:
      "https://www.google.com/maps/place/Rumba/@47.6138439,-122.3308532,17z/data=!4m13!1m7!3m6!1s0x54906acac1c848eb:0x1dcdcc9a84f10ab2!2sRumba!8m2!3d47.6138723!4d-122.3285972!10e1!3m4!1s0x54906acac1c848eb:0x1dcdcc9a84f10ab2!8m2!3d47.6138723!4d-122.3285972",
  },
  {
    participant: "Sawyer",
    description:
      "a rustic, airy eatery and bar with American comfort food and a patio.",
    website: "http://sawyerseattle.com/",
    brandsOffered: "Dry, All The Bitter, NLL",
    mapLink:
      "https://www.google.com/maps/place/Sawyer/@47.667005,-122.385039,15z/data=!4m5!3m4!1s0x0:0xcab2610ce5652ede!8m2!3d47.667005!4d-122.385039",
  },
  {
    participant: "Screwdriver Bar",
    description:
      "a dimly lit basement joint serving beer and cocktails, with a rock 'n' roll jukebox & pinball machines.",
    website: "http://www.screwdriverbar.com/",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/Screwdriver+Bar/@47.613995,-122.346966,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x2d9048987bed698f!8m2!3d47.613995!4d-122.346966",
  },
  {
    participant: "Stampede Cocktail Club",
    description: "a cool, cozy bar with clever cocktails and dumplings.",
    website: "https://www.stampedecocktailclub.com/",
    brandsOffered: "All The Bitter, Spiritless, Athletic Brewing Co.",
    mapLink:
      "https://www.google.com/maps/place/Stampede+Cocktail+Club/@47.6525473,-122.3568219,15z/data=!4m5!3m4!1s0x0:0x4f839f3593a28dfc!8m2!3d47.6525804!4d-122.3568056",
  },
  {
    participant: "STELLA",
    description:
      "an upscale dining and drinking spot located in Hotel Sorrento, with a well-curated menu.",
    website: "https://www.stellaseattle.com/",
    brandsOffered: "Giffard, NLL, Wilderton",
    mapLink:
      "https://www.google.com/maps/place/STELLA./@47.6088852,-122.3290863,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab615cfef57:0xcbf74e5bebe15068!8m2!3d47.6089267!4d-122.3267932",
  },
  {
    participant: "Tavern Law",
    description:
      "a sophisticated space with a speakeasy vibe, serving high-end vintage cocktails & American fare.",
    website: "https://www.tavernlaw.com/",
    brandsOffered: "Grüvi, Wilderton, NLL",
    mapLink:
      "https://www.google.com/maps/place/Tavern+Law/@47.613254,-122.3252777,15z/data=!4m13!1m7!3m6!1s0x0:0xaff3f0fece63d53d!2sTavern+Law!8m2!3d47.6132549!4d-122.3165689!10e1!3m4!1s0x0:0xaff3f0fece63d53d!8m2!3d47.6132549!4d-122.3165689",
  },
  {
    participant: "The George and Dragon Pub",
    description:
      "a relaxed hangout where fans watch soccer, eat British pub grub, and sip pints.",
    website: "https://theegeorge.com/",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/The+George+%26+Dragon+Pub/@47.6530184,-122.3561637,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xd334cf62d12db3ab!8m2!3d47.652953!4d-122.3561635",
  },
  {
    participant: "Trade Winds Tavern",
    description: "an inclusive corner pub with cool supper club vibes.",
    website: "https://www.tradewindstavern.net/",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/Trade+Winds+Tavern/@47.6153124,-122.3506096,17z/data=!3m2!4b1!5s0x5490154e667e4acb:0x29312162c1c6555b!4m5!3m4!1s0x54901572c17af5cd:0xe11304da487225!8m2!3d47.6153124!4d-122.3484209",
  },
  {
    participant: "Vinnie's Wine Shop",
    description:
      "a chill, pocket-sized raw seafood bar specializing in local fare and a well-curated natural wine list.",
    website: "https://www.vinniesseattle.com/",
    brandsOffered: "The Pathfinder",
    mapLink:
      "https://www.google.com/maps/place/Vinnie's+Wine+Shop/@47.6152961,-122.35057,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x549015697eee3295:0xf3e206a62a35e22b!2sVinnie's+Wine+Shop!8m2!3d47.6152961!4d-122.3483813!10e1!3m4!1s0x549015697eee3295:0xf3e206a62a35e22b!8m2!3d47.6152961!4d-122.3483813",
  },
  {
    participant: "Watershed Pub & Kitchen",
    description:
      "a bright, lofty pub offering curated beers, cider, and local spirits alongside pizzas & sandwiches.",
    website: "https://www.watershedpub.com/",
    brandsOffered: "Lyre's",
    mapLink:
      "https://www.google.com/maps/place/Watershed+Pub+%26+Kitchen/@47.7019446,-122.3277247,17z/data=!3m1!4b1!4m5!3m4!1s0x549013ffb06eec81:0xd7854c72eda7bf6c!8m2!3d47.701941!4d-122.325536",
  },
  {
    participant: "Witness",
    description:
      "a lively bar with craft cocktails & filling Southern fare served in a space sporting church pews.",
    website: "http://witnessbar.com/",
    brandsOffered: "Coming Soon!",
    mapLink:
      "https://www.google.com/maps/place/Witness/@47.6223367,-122.3229344,17z/data=!4m13!1m7!3m6!1s0x0:0x81c44b1a7e41d1f9!2sWitness!8m2!3d47.6223367!4d-122.3207457!10e1!3m4!1s0x0:0x81c44b1a7e41d1f9!8m2!3d47.6223367!4d-122.3207457",
  },
];

export default function Participants() {
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
        <div className="participants row">
          <div className="nav-container col-2">
            <Nav />
          </div>
          <div className="main-content col-10">
            <header>
              <span>
                <h1>Participating Bars & Restaurants</h1>
              </span>
              <span>
                <h6>(A to Z)</h6>
              </span>
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
                  ({
                    participant,
                    description,
                    website,
                    brandsOffered,
                    mapLink,
                  }) => (
                    <div key={participant} className="col-12 col-md-6 col-lg-4">
                      <div className="card">
                        <div className="internal-card">
                          <div className="card-body">
                            <div className="row row-1">
                              <div className="col">
                                <a
                                  href={mapLink}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img
                                    className="pin"
                                    src={Pin}
                                    alt="Location Pin"
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="row row-2">
                              <div className="col">
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
                              </div>
                            </div>
                            <div className="row row-3">
                              <div className="col">
                                Low-and-No-Alcohol Offerings:
                                <br />
                                {brandsOffered}
                              </div>
                            </div>
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
        <div className="participants row">
          <div className="horizontalNav-container">
            <HorizontalNav />
          </div>
          <div className="main-content">
            <header>
              <h1>Participating Bars & Restaurants (A to Z)</h1>
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
                  ({
                    participant,
                    description,
                    website,
                    brandsOffered,
                    mapLink,
                  }) => (
                    <div key={participant} className="col-12 col-md-6 col-lg-4">
                      <div className="card">
                        <div className="internal-card">
                          <div className="card-body">
                            <div className="row row-1">
                              <div className="col">
                                <a
                                  href={mapLink}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img
                                    className="pin"
                                    src={Pin}
                                    alt="Location Pin"
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="row row-2">
                              <div className="col">
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
                              </div>
                            </div>
                            <div className="row row-3">
                              <div className="col">
                                Low-and-No-Alcohol Offerings:
                                <br />
                                {brandsOffered}
                              </div>
                            </div>
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
