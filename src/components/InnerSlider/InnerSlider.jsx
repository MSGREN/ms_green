import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Navbar from "../Navbar";

import Slider_1 from "../Slider/Slider_1";
import Slider_2 from "../Slider/Slider_2";
import Slider_3 from "../Slider/Slider_3";

<Navbar />;
// Sample content for the sliders
const slidesContent = [
  {
    title: "",
    description: "",
    component: <Slider_1 />,
  },
  {
    title: "",
    description: "",
    component: <Slider_2 />,
  },
  {
    title: "",
    description: "",
    component: <Slider_3 />,
  },
];

// Slider component with customized settings
const InnerSlider = ({ slides }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Remove arrow navigation
    draggable: true, // Enable dragging with mouse
    swipe: true, // Enable swipe on touch devices
    responsive: [
      {
        breakpoint: 768, // tablet breakpoint
        settings: {
          arrows: true, // Enable arrows on tablet
        },
      },
      {
        breakpoint: 1024, // large screen breakpoint
        settings: {
          arrows: true, // Enable arrows on large screen
        },
      },
    ],
  };

  const slickRef = React.useRef();

  const nextSlide = () => {
    slickRef.current.slickNext();
  };

  const prevSlide = () => {
    slickRef.current.slickPrev();
  };

  return (
    <div className="relative">
      <Slider {...sliderSettings} ref={slickRef}>
        {slides.map((slide, index) => (
          <div key={index}>
            <SlideContent
              title={slide.title}
              description={slide.description}
              component={slide.component}
            />
          </div>
        ))}
      </Slider>
      <div className="absolute hidden md:block top-1/2 transform -translate-y-1/2 left-4">
        <button className=" text-white p-2 rounded-full focus:outline-none" onClick={prevSlide}>
          <FaArrowLeft size={20} />
        </button>
      </div>
      <div className="absolute hidden md:block top-1/2 transform -translate-y-1/2 right-4">
        <button
          className=" text-white p-2 rounded-full focus:outline-none  ml-2"
          onClick={nextSlide}>
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

// Sample content for the individual slides
const SlideContent = ({ title, description, component }) => (
  <div className="p-4">
    <h2 className="text-lg font-bold">{title}</h2>
    <p>{description}</p>
    <div className="outline-none">
      {" "}
      {/* Add this div with the outline-none class */}
      {component}
    </div>
  </div>
);

// Your main component
const MainComponent = () => {
  return (
    <div className="">
      <InnerSlider slides={slidesContent} />
    </div>
  );
};

export default MainComponent;
