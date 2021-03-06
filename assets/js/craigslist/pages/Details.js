import React, { Component } from "react";
import ReactDOM from "react-dom";
import Gallery from './components/Gallery.js'

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
          <div className="white-box">
            <section className="submenu">
              <div className="direction">
                <a href="#" className="prev">
                  Prev
                </a>
                <a href="#" className="next">
                  Next
                </a>
              </div>

              <nav className="sub-links">
                <a href="#">More Ads by User</a>
                <a href="#">Print</a>
                <a href="#">Share</a>
                <a href="#">Contact Seller</a>
              </nav>
            </section>

            <section className="content-area">
              <div className="media-column">
                <Gallery />
                </div>
              <div className="details-column">
                <div className="date">Posted: March 28th</div>
                <h3 className="title">Silver 2017 BMW</h3>
                <h4 className="price">44,000</h4>
                <div className="more-details">
                  <div className="info">
                    <label>Vin</label>
                    <h5>1HHBH41JXMN109186</h5>
                  </div>
                  <div className="info">
                    <label>Mileage</label>
                    <h5>5,600</h5>
                  </div>
                  <div className="info">
                    <label>Transmission</label>
                    <h5>6-Speed Automatic</h5>
                  </div>
                  <div className="info">
                    <label>Fuel</label>
                    <h5>Gasoline</h5>
                  </div>
                  <div className="info">
                    <label>Exterior Color</label>
                    <h5>Silver</h5>
                  </div>
                  <div className="info">
                    <label>Drive</label>
                    <h5>Rear Wheel Drive</h5>
                  </div>
                  <div className="info">
                    <label>Type</label>
                    <h5>Sedan</h5>
                  </div>
                  <div className="info">
                    <label>Interior Color</label>
                    <h5>Black Leather</h5>
                  </div>
                  <div className="info">
                    <label>Condition</label>
                    <h5>Like New</h5>
                  </div>
                </div>
                <div className="description">
                  <label>Description</label>
                  <p>
                    The fully redesigned 2017 BMW 5 Series brings a slew of new
                    features, making it one of the most technologically advanced
                    luxury midsize cars. The 5 Series' ride emphasizes comfort,
                    and while it's fairly composed, sportier rivals provide a
                    more engaging driving experience.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}
