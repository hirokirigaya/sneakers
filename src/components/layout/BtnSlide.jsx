import {
  BsFillArrowLeftCircleFill as ArrowLeft,
  BsFillArrowRightCircleFill as ArrowRight,
} from "react-icons/bs";

import "./SliderHome.css";

function BtnSlide({moveSlide, direction}) {
  return (
    <div>
      <button className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'} onClick={moveSlide} >
      {direction === 'next' ? <ArrowRight/> : <ArrowLeft/>}
      </button>
    </div>
  );
}

export default BtnSlide;
