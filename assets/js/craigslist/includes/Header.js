import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Johnny"
    };
  }
  clickedBtn = () => {
    console.log("");
  };
  render() {
    return (
      <header>
        <div className={"left-menu"}>
          <div className={"logo"}>Craigslist</div>
          <div className={"city"} />
          Atlanta
          <i className={`fas fa-chevron-down`} />
        </div>
        <div className={`dropdown`}>
          <ul>
            <li>New York City</li>
          </ul>
        </div>
        <div className={"right-menu"}>
          <div className={"user-img"}>img</div>
          <div className={"user-dropdown"} />
          My Account
          <i className={`fas fa-chevron-down`} />
        </div>
        <div className={"post-btn"}>Post to Classifieds</div>
      </header>
    );
  }
}
