import React, { Component } from "react";
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
        <div class="legal">
          <p id="ftext">&copy; 2021 Designed and Developed by Abhishek Kumar</p>
        </div>
      </footer>
    );
  }
}
export default Footer;
