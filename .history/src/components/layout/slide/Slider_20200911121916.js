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
              src="https://images.unsplash.com/photo-1493928841026-e1ab0a590a61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              alt="img"
              className="slider-height"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1574047473179-a73921fc1eb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="img"
              className="slider-height"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1586136194012-35ceaddbd773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              alt="img"
              className="slider-height"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
