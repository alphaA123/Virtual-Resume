import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__addr">
          <h1 class="footer__logo">Abhishek Kumar</h1>

          <h2>Contact</h2>
          <h4>Email: abhishekkgodda@gmail.com</h4>
          <h4>Phone no: 9110949473</h4>
        </div>

        <div className="footer_links">
          <h4>Profile Links :-</h4>
          <a href="https://github.com/alphaA123" target="blank">👉Github</a>
          <br />
          <a href="https://linkedin.com/in/abhishek-kumar-b38108154" target="blank">👉Linkdn</a>
          <br />
          <a href={"../images/Resume.pdf"} download>
            👉Click Here
          </a>{" "}
          to download Resume in pdf format.
        </div>

        <div class="legal">
          <p>
            &copy; 2021 Designed and Developed by Abhishek Kumar
          </p>
        </div>
      </footer>
    );
  }
}
export default Footer;
