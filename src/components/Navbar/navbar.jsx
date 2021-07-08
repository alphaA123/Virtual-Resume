import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuItems from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbar-logo">
          Abhishek's Resume<i className="fas fa-user-tie"></i>
        </h1>
        <ul className={this.state.clicked ? "nav_menu_active" : "nav_menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
