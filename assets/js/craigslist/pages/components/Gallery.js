import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    const { match, location, history } = this.props
    return (

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
    )
  }
}
