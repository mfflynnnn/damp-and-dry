import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Brands from "./Brands.js";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Brands" element={<Brands />} />
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
