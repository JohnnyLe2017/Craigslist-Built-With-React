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
                <div className="gallery">
                  <div className="slider">
                    <div className="main-image">
                      <div className="arrows left-arrow">{"<"}</div>
                      <div className="arrows right-arrow">{">"}</div>
                      <div className="image-1"></div>
                    </div>
                  </div>
                  <div className="thumbnails">
                    <div className="thumb-image1" />
                    <div className="thumb-image2" />
                    <div className="thumb-image3" />
                    <div className="thumb-image4" />
                    <div className="thumb-image5" />
                    <div className="thumb-image6" />
                  </div>
                </div>
              </div>
              <div className="details-column">
                <div className="date">Posted: March 28th</div>
                <h4 className="price">Silver 2017 BMW</h4>
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
    );
  }
}
