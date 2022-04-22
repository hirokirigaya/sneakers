import Container from "../layout/Container";
import { useState } from "react";

import { Link } from "react-router-dom";

import "./SliderHome.css";
import HomeSlider from "../sliders/HomeSlider";
import BtnSlide from "./BtnSlide";

function SliderHome() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== HomeSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === HomeSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(HomeSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <Container>
      <div className="content">
        <div className="container-slider">
          <h1><Link to="men">Products</Link></h1>
          {HomeSlider.map((obj, index) => {
            return (
              <div
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
                key={obj.id}
              >
                <img src={`/images/sliderHome/slider${index + 1}.jpg`} alt='img-slider'/>
              </div>
            );
          })}
        </div>
        <BtnSlide direction={"next"} moveSlide={nextSlide} />
        <BtnSlide direction={"prev"} moveSlide={prevSlide} />
        <div className="container-dots">
          {Array.from({ length: 2 }).map((item, index) => {
            return (
              <div
                className={slideIndex === index + 1 ? "dot active" : "dot"}
                onClick={() => moveDot(index + 1)}
                key={index + 1}
              ></div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default SliderHome;
