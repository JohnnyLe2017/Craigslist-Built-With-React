import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      allImages: [
        'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_5.jpg',
        'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_6.jpg',
        'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_7.jpg',
        'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_12.jpg',
        'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_13.jpg',
        'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_14.jpg'
      ]
    }
  }

  allImagesLoop = () => {
    console.log(this.state.allImages)
	return this.state.allImages.map((item, i) => {
	return(
		<div key={i} className="thumb-image" style={{
			"backgroundImage": `url('${item}')`
    }}></div>
	)
	})
	}

  render() {
    const { match, location, history } = this.props
    return (
              <div className="gallery">
                <div className="slider">
                  <div className="main-image">
                    <div className="arrows left-arrow">{"<"}</div>
                    <div className="arrows right-arrow">{">"}</div>
                      <div className="image-1" style={{
                             "backgroundImage": `url('${this.state.allImages[0]}')`
                      }}</div>
                  </div>
                </div>
                <div className="thumbnails">
                  {this.allImagesLoop()}
                </div>
              </div>
    )
  }
}
