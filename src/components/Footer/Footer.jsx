
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
    render(){
        return (
          <footer className="footer">
            <div className="footer__addr">
              <h1 class="footer__logo">Abhishek Kumar</h1>

              <h2>Contact</h2>
              <h4>Email: abhishekkgodda@gmail.com</h4>
              <h4>Phone no: 9110949473</h4>
            </div>
            <ul class="footer__nav">
              <li class="nav__item">
                <h2 class="nav__title">lorem ipsum</h2>

                <ul class="nav__ul">
                  <li>
                    <a href="#">lorem ipsum</a>
                  </li>

                  <li>
                    <a href="#">lorem ipsum</a>
                  </li>

                  <li>
                    <a href="#">lorem ipsum</a>
                  </li>
                </ul>
              </li>

              <li class="nav__item nav__item--extra">
                <h2 class="nav__title">lorem ipsum</h2>

                <ul class="nav__ul nav__ul--extra">
                  <li>
                    <a href="#">lorem ipsum</a>
                  </li>

                  <li>
                    <a href="#">lorem ipsum</a>
                  </li>

                  <li>
                    <a href="#">lorem ipsum</a>
                  </li>

                  <li>
                    <a href="#">lorem ipsum</a>
                  </li>

                  <li>
                    <a href="#">lorem ipsum</a>
                  </li>

                  <li>
                    <a href="#">lorem ipsum</a>
                  </li>
                </ul>
              </li>

              <li class="nav__item">
                <h2 class="nav__title">lorem ipsum</h2>

                <ul class="nav__ul">
                  <li>
                    <a href="#">lorem ipsum</a>
                  </li>

                  <li>
                    <a href="#">lorem ipsum</a>
                  </li>

                  <li>
                    <a href="#">lorem ipsum</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="legal">
              <p>
                &copy; 2021 Designed and Developed by <a href="/Abhishek">Abhishek Kumar</a>
              </p>
            </div>
          </footer>
        );
    }
}
export default Footer;
