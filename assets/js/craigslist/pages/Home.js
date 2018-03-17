import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      name: "Johnny",
      categoriesData: ''
    }
  }

  componentWillMount() {
    const self = this;
    axios.get('/api/categories')
    .then(function (response) {
      self.setState({
        categoriesData: response.data
      }, () => {
        console.log(self.state);
      })

    })
    .catch(function (error) {
      console.log(error);
    });
  }

  clickedBtn = () => {
    console.log("");
  }

  loopCategories = () => {
    if(this.state.categoriesData != '') {
      return this.state.categoriesData.map((category, i) => {
        return (
          <div className="categories" key={i}>
            <div className="title">{category.title}</div>
            <div className="group-links">
              <a href="#" className="link">
                Community
              </a>
              </div>
          </div>
        );
      });
    }
  };

  loopTags = () => {
    let testTags = ["a", "b", "c", "d", "e", "f", "g"];
    return testTags.map((item, i) => {
      return (
        <div key={i} className="tag">
          Apple Macbook
        </div>
      );
    });
  };
  render() {
    return (
      <div className="home">
        <div className="container">
          <h1>
            Connecting People <br /> Everywhere :)
          </h1>
          <section className={"links"}>{this.loopCategories()}</section>
          <section className={"trending"}>
            <input type="text" name="search" className="search" />
            <div className="title">
              <i className="far fa-clock" /> TRENDING NOW
            </div>
            <div className="trending-tags">{this.loopTags()}</div>
          </section>
        </div>
      </div>
    );
  }
}
