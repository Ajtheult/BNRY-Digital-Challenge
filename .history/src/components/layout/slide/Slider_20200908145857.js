import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import "./Slider.css";

export default class MainSlider extends Component {
  render() {
    const settings = {};
    return (
      <div className="slider-height">
        <Slider {...settings}>
          <div className="slider-height">
            <img
              src="https://images.unsplash.com/photo-1599530858756-67d5e18c55a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              alt="img"
              className="image-height"
            />
          </div>
          <div className="slider-height">
            <img
              src="https://images.unsplash.com/photo-1583073206552-1e134c9120f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
              alt="img"
              className="image-height"
            />
          </div>
          <div className="slider-height">
            <img
              src="https://images.unsplash.com/photo-1587953114051-4b9a2619c3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="img"
              className="image-height"
            />
          </div>
          <div className="slider-height">
            <img
              src="https://images.unsplash.com/photo-1538151121578-94e41535161b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="img"
              className="image-height"
            />
          </div>
          <div className="slider-height">
            <img
              src="https://images.unsplash.com/photo-1580147394287-9064a90bd403?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="img"
              className="image-height"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
