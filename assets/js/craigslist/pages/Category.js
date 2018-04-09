import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'

export default class Category extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount(){
    const {match, history } = this.props
    const self = this;
    axios.get(`/api/${match.params.city}/${match.params.category}`)
    .then(function (response) {
      self.setState({
        itemsData: response.data
      }, () => {
        console.log(self.state);
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  loopItems = () => {
    if(this.state.itemsData != undefined){
      return this.state.itemsData.map((item, i) => {
        return (
          <div className="item">
            <div className="image" style={{
              backgroundImage: `url('${item.images[0]}')`
            }}>
              <div className="price">${item.price}</div>
              Image
            </div>
            <div className="details">
              <i className="fa fa-star" aria-hidden="true" />
              <h5>{item.title}</h5>
              <h6>{item.city}</h6>
            </div>
          </div>
        );
      });
    }
};

  showMakeModelDropdown = () => {
    const { match, location, history } = this.props;
    if(match.params.listings == 'cars-and-trucks') {
      return (<div className="make-model-comp">
        <div className="form-group make">
        <label>Make</label>
        <select name="make" className="make">
          <option value="BMW">BMW</option>
          <option value="Honda">Honda</option>
          <option value="Toyota">Toyota</option>
        </select>
      </div>

      <div className="form-group model">
        <label>Model</label>
        <select name="model" className="model"
        onChange={this.handleChange}>
          <option value="BMW">BMW</option>
        </select>
      </div>
      </div>)
    }
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = (event.target.type == 'checkbox') ?
    event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
        console.log(this.state)
    })
  }
  render() {
    const { match, location, history } = this.props;
    return (
      <div className="listings-page">
        <div className="container">
          <section id="filter">
            <div className="form-group price">
              <label>Price</label>
              <div className="min-max">
                <select name="min-price" className="min-price"
                onChange={this.handleChange}>
                  <option value="0">0</option>
                  <option value="1000">1000</option>
                  <option value="5000">5000</option>
                </select>
                <select name="max-price" className="max-price"
                onChange={this.handleChange}>
                <option value="1000">1000</option>
                <option value="5000">5000</option>
                <option value="1000">10000</option>
                </select>
              </div>
            </div>

            {this.showMakeModelDropdown()}
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

              <section className="all-items">{this.loopItems()}</section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
