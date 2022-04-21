import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <h1>Whoops!</h1>
            <p>This page fell off the bandwagon. Sorry about that.</p>
            <p>
              Take me <Link to={"/App"}>home</Link>
            </p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
