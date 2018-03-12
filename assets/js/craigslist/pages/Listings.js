import React, { Component} from 'react'
import ReactDOM from 'react-dom'


export default class Listings extends Component {
  constructor () {
    super()
    this.state = {}
  }

  loopItems = () =>{
    let testArray = [1,2,3,4,5,6,7,8]
    return testArray.map ((item, i) => {
      return(
        <div className="item">
        <div className="image">
        <div className="price">$9,000</div>
        Image
        </div>
        <div className="details">
          <h5>Title</h5>
        <h6>City</h6>
        </div>
        </div>
      )
    })
  }

  render () {
    const {match, location, history } = this.props
    return (
      <div className="listings-page">
      <div className="container">
        <section id="filter">
      <div className="form-group price">
      <label>PRICE</label>
      <div className="min-max">
        <select name="price" className="min-price">
        <option value="0">0</option>
        </select>
      <select name="max-price" className="max-price">
        <option value="1000">1000</option>
      </select>
      </div>
      </div>
      <div className="form-group make">
        <label>MAKE</label>
          <select name="make" className="make">
          <option value="0">0</option>
          </select>
      </div>

      <div className="form-group model">
      <label>MODEL</label>
        <select name="model" className="model">
        <option value="BMW">BMW</option>
        </select>
      </div>

      <div className="form-group button">
      <div className="primary-btn">Update</div>
      <div className="reset-btn">Reset</div>
      </div>
      </section>
      </div>
      <section id="list-view">
        <div className="container">
            <div className="white-box">
        <section className="change-view">
        <div className="form-group view-dropdown">
          <select name="select-view" className="select-view">
            <option value="gallery">Gallery View</option>
            <option value="list">List View</option>
            <option value="thumb">Thumb View</option>
          </select>
        </div>
        <div className="form-group sort-dropdown">
          <select name="sort-dropdown" className="sort-dropdown">
            <option value="gallery">Newest</option>
          </select>
        </div>
      </section>

        <section className="all-items">
          {this.loopItems()}
        </section>
      </div>
      </div>
      </section>
      </div>
    )
  }
}
