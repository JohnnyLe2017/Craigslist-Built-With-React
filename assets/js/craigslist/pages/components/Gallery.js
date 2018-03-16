import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      allImages: '',
      currentImage: '',
      currentIndex: 0
    }
  }

  componentWillMount() {
    const allImages = [
      'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_5.jpg',
      'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_6.jpg',
      'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_7.jpg',
      'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_12.jpg',
      'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_13.jpg',
      'https://cars.usnews.com/static/images/Auto/custom/13372/2017_BMW_5-Series_14.jpg'
    ]

    this.setState({
      allImages,
      currentImage: allImages[this.state.currentIndex]
    })
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

  nextBtn = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 1
    })
  }

  prevBtn = () => {
    this.setState({
      currentIndex: this.state.currentIndex - 1
    })
  }

  render() {
    const { match, location, history } = this.props
    return (
              <div className="gallery">
                <div className="slider">
                  <div className="main-image">
                    <div className="arrows left-arrow" onClick={this.prevBtn}>{"<"}</div>
                    <div className="arrows right-arrow" onClick={this.nextBtn}>{">"}</div>
                      <div className="image-1" style={{
                             "backgroundImage": `url('${this.state.allImages[this.state.currentIndex]}')`
                      }}></div>
                  </div>
                </div>
                <div className="thumbnails">
                  {this.allImagesLoop()}
                </div>
              </div>
    )
  }
}
