import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import HorizontalNav from "./HorizontalNav";
import "./Contact.css";

export default function Contact() {
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
        <div className="Contact">
          <header>
            <Nav />
          </header>
          <main>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdKwaPkv7SDuGNyhz-4KV3QyEQ_uZuo8AbRMUtNw17TZGAwzw/viewform?embedded=true"
              width="640"
              height="677"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="contact-form"
            >
              Loading…
            </iframe>
          </main>
          <footer>
            <div></div>
          </footer>
        </div>
      ) : (
        <div className="Contact">
          <header>
            <HorizontalNav />
          </header>
          <main>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdKwaPkv7SDuGNyhz-4KV3QyEQ_uZuo8AbRMUtNw17TZGAwzw/viewform?embedded=true"
              width="640"
              height="677"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="contact-form"
            >
              Loading…
            </iframe>
          </main>
          <footer>
            <div></div>
          </footer>
        </div>
      )}
    </div>
  );
}
