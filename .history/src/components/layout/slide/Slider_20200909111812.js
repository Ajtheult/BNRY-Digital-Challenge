import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";

export default class MainSlider extends Component {
  render() {
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
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1581481615985-ba4775734a9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60"
              className="slider-height"
              alt="img"
            />

            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60"
              alt="img"
              className="slider-height"
            />

            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1587953114051-4b9a2619c3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="img"
              className="slider-height"
            />

            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1538151121578-94e41535161b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="img"
              className="slider-height"
            />

            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1580147394287-9064a90bd403?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="img"
              className="slider-height"
            />
            <Carousel.Caption>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
