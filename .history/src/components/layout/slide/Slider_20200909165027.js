import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";

const MainSlider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1574876999803-955c688d6581?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60"
            alt="img"
            className="slider-height"
          />
          <Carousel.Caption>
            <p>Our main storm trooper ~ the leader of the team</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1581481615985-ba4775734a9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60"
            className="slider-height"
            alt="img"
          />

          <Carousel.Caption>
            <p>See-Threepio ~ The main foil to our antagonist </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1493928841026-e1ab0a590a61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
            alt="img"
            className="slider-height"
          />

          <Carousel.Caption>
            <p>The city where the story is set</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1574047473179-a73921fc1eb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="img"
            className="slider-height"
          />
          <Carousel.Caption>
            <p>The storm trooper getting his weapons reloaded</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1586136194012-35ceaddbd773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
            alt="img"
            className="slider-height"
          />

          <Carousel.Caption>
            <p>Looks like we know who won</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainSlider;
