import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";

export default class MainSlider extends Component {
  render() {
    const settings = {};
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1599530858756-67d5e18c55a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              alt="img"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1583073206552-1e134c9120f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
              alt="img"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1587953114051-4b9a2619c3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="img"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1538151121578-94e41535161b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="img"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1580147394287-9064a90bd403?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt="img"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
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
