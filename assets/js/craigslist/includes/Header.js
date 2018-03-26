import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Johnny",
      cityDropDown: false,
      selectedCity: "nyc"
    };
  }
  clickedBtn = () => {
    console.log("");
  };
  render() {
    return (
      <div className="container">
      <header>

        <div className={"left-menu"}>
          <div className={"logo"}>Craigslist</div>
          <div className={"city"}>
          Atlanta
          <i className={`fas fa-chevron-down`} />
          <div className={"dropdown"}>
            <ul>
              <li>New York City</li>
              <li>New York City</li>
            </ul>
          </div>
          </div>
        </div>

        <div className={"right-menu"}>
          <div className={"user-img"}>img</div>
          <div className={"user-dropdown"}>
          My Account
          <i className={`fas fa-chevron-down`} />
        </div>
        <div className={"post-btn"}>Post to Classifieds</div>
        </div>

      </header>
    </div>
    );
  }
}
