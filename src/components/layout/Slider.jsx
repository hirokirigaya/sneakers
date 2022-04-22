import {
  BsFillArrowLeftCircleFill as ArrowLeft,
  BsFillArrowRightCircleFill as ArrowRight,
} from 'react-icons/bs';

import { AiOutlineClose } from 'react-icons/ai';
import './Slider.css';

import { useState } from 'react';

function Slider({ slides, modal, setModal }) {
  const [current, setCurrent] = useState(0);
  const length = slides.img.length;
  // console.log(current);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (slides.length <= 0) {
    return null;
  }

  const dotMove = (index) => {
    setCurrent(index);
  };

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <section className="content-slider">
        {slides.img.map((img, index) => {
          return (
            <div
              className={index === current ? 'slideon active' : 'slideoff'}
              key={index}
            >
              {index === current && (
                <img
                  src={img}
                  alt="image-full"
                  className="img-full"
                  onClick={openModal}
                />
              )}
            </div>
          );
        })}
        <div className="content-dots">
          {slides.img.map((img, index) => {
            return (
              <img
                src={img}
                alt="image-thumb"
                className={index === current ? 'img-thumb active' : 'img-thumb'}
                onClick={() => dotMove(index)}
                key={index + 1}
              />
            );
          })}
        </div>
        <ArrowLeft className="arrow left" onClick={prevSlide} />
        <ArrowRight className="arrow right" onClick={nextSlide} />
      </section>
      <section
        className={modal === true ? 'content-modal active' : 'content-modal'}
      >
        <AiOutlineClose className="close" onClick={openModal}/>
        {slides.img.map((img, index) => {
          return (
            <div
            className={index === current ? 'slideon active' : 'slideoff'}
            key={index}
            >
              {index === current && (
                <img src={img} alt="image-full" className="img-full" />
              )}
            </div>
          );
        })}
        <div className="content-dots">
          {slides.img.map((img, index) => {
            return (
              <img
                src={img}
                alt="image-thumb"
                className={index === current ? 'img-thumb active' : 'img-thumb'}
                onClick={() => dotMove(index)}
                key={index + 1}
              />
            );
          })}
        </div>
        <ArrowLeft className="arrow left" onClick={prevSlide} />
        <ArrowRight className="arrow right" onClick={nextSlide} />
      </section>
    </>
  );
}

export default Slider;
