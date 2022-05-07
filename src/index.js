import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App.js";
import About from "./About.js";
import Brands from "./Brands.js";
import Participants from "./Participants.js";
import Contact from "./Contact.js";
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/participants" element={<Participants />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <h1>Whoops!</h1>
            <p>This page fell off the bandwagon. Sorry about that.</p>
            <p>
              Take me <Link to={"/"}>home</Link>
            </p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
