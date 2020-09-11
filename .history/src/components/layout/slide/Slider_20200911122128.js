import React, { Component } from "react";
import Slider from "infinite-react-carousel";

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
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1598978446834-b4cbf2583cc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
              className="slider-height"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1598978270333-62571dd762e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
              alt="img"
              className="slider-height"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              alt="img"
              className="slider-height"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="img"
              className="slider-height"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
