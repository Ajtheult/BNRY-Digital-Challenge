import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import "./Slider.css";

export default class MainSlider extends Component {
  render() {
    const settings = {};
    return (
      <div>
        <span>CustomSlider</span>
        <Slider {...settings}>
          <div>
            <h2 className="slider-height">
              <img
                src="https://images.unsplash.com/photo-1599530858756-67d5e18c55a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                alt="img"
              />
            </h2>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
