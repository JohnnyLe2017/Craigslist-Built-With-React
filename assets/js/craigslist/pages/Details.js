import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="details-page">
        <div className="container">
          <section className="submenu">
            <div className="direction">
              <div className="prev">Prev</div>
              <div className="next">Next</div>
            </div>

            <nav className="sub-links">
              <a href="#">More Ads by User</a>
              <a href="#">Print</a>
              <a href="#">Share</a>
              <a href="#">Contact Seller</a>
            </nav>
          </section>

          <section>
            <div className="media-column">
              <div className="gallery">
                <div className="slider">
                  <div className="main-image">
                    <div className="left-arrow">{"<"}</div>
                    <div className="left-arrow">{">"}</div>
                  </div>
                </div>
                <div className="thumbnails">
                <div className="thumb-image">Image</div>
                </div>
              </div>
            </div>
            <div className="details-column">
            </div>
          </section>
        </div>
      </div>
    );
  }
}
