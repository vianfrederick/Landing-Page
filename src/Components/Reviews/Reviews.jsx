import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageOne from "../../images/image-one.jpg";
import ImageTwo from "../../images/image-two.jpg";
import ImageThree from "../../images/image-three.jpg";
import ImageFour from "../../images/image-four.jpg";
import ImageFive from "../../images/image-five.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Reviews = () => {
  const slider = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="pt-[5rem] md:mt-16">
      <div className="container  w-[80%] mx-auto relative text-center">
        <h1 className="text-center text-4xl font-bold mb-16 text-clr_secondary_800 mx-auto">What they've have said</h1>
        <Slider ref={slider} className="review-slider-container" {...settings}>
          <div className="slider-element">
            <img src={ImageOne} alt="" />
            <h2 className="text-clr_secondary_800 font-semibold mb-4">
              Ronaldo
            </h2>
            <p className="text-clr_para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div>
          <div className="slider-element">
            <img src={ImageThree} alt="" />
            <h2 className="text-clr_secondary_800 font-semibold mb-4">Messi</h2>
            <p className="text-clr_para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div>
          <div className="slider-element">
            <img src={ImageFour} alt="" />
            <h2 className="text-clr_secondary_800 font-semibold mb-4">
              Sergia Ramos
            </h2>
            <p className="text-clr_para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div>
          <div className="slider-element">
            <img src={ImageFive} alt="" />
            <h2 className="text-clr_secondary_800 font-semibold mb-4">
              Keylor Navas
            </h2>
            <p className="text-clr_para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div>
        </Slider>
        <button
          className="absolute top-[205px] left-0 text-clr_primary_400"
          onClick={() => slider?.current?.slickPrev()}
        >
          <AiOutlineArrowLeft className="text-[1.5rem]" />
        </button>
        <button
          className="absolute top-[205px] right-0 text-clr_primary_400"
          onClick={() => slider?.current?.slickNext()}
        >
          <AiOutlineArrowRight className="text-[1.5rem]" />
        </button>
        <button className="mt-[2.8em] nav-btn font-semibold text-clr_secondary_800 bg-clr_primary_400 rounded-full py-2 px-4">Get Started</button>
      </div>
    </section>
  );
};

export default Reviews;
