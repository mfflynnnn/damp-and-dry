import React from "react";
import "./Contact.css";
import Nav from "./Nav";

export default function Contact() {
  return (
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
        {/*<div className="contact-card">
          <form>
            <div className="form-group">
              <div className="name-capture-group">
                <label for="name-capture">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name-capture"
                  placeholder="Full Name"
                  required
                />
              </div>
              <br />
              <div className="email-capture-group">
                <label for="email-capture">Email Address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-capture"
                  aria-describedby="emailHelp"
                  placeholder="Email Address"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <br />
              <label for="message-capture">Message:</label>
              <textarea
                className="form-control"
                id="message-capture"
                rows="8"
              ></textarea>
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
  */}
      </main>
      <footer>
        <div></div>
      </footer>
    </div>
  );
}
