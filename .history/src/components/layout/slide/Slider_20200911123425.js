import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import "./Slider.css";

export default class MainSlider extends Component {
  render() {
    const settings = {
      //   autoplay: true,
      //   adaptiveHeight: true,
      dots: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1598978483528-fd57466ab0ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
              alt="img"
              className="slider-height"
            />
            <h4>A late teen aesthetic</h4>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1598978446834-b4cbf2583cc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
              className="slider-height"
              alt="img"
            />
            <h4>A computer with a beautiful ocean wallpaper</h4>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1598978270333-62571dd762e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
              alt="img"
              className="slider-height"
            />
            <h4>A computer next to a city view</h4>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1572985919466-6d00864965c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="img"
              className="slider-height"
            />
            <h4>A computer and laptop with a very colorful wallpaper </h4>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="img"
              className="slider-height"
            />
            <h4>A minimalist layout with very warm colours</h4>
          </div>
        </Slider>
      </div>
    );
  }
}
