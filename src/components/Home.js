import React from 'react';
import TopNavigation from './TopNavigation';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
        <TopNavigation/>
        <div>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/banner4.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Amazon alexa</h5>
          <p>Smart living made simple with Alexa's touchless magic.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/banner4.png"
          alt="Second slide"
        />
        <Carousel.Caption>
        <h5>Nest</h5>
          <p>
          Elevate your home's comfort with Google Nest Thermostat.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/banner3.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h5>Wipro Smart Devices</h5>
          <p>Smart living, simplified by Wipro's innovative tech.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    </div>
  )
}

export default Home