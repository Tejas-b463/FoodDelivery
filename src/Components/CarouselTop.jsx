import { useRef } from "react";
import Slider from "react-slick";
import ShimmerCarousel from "./ShimmerCarousel";
import { useParams } from "react-router-dom";
import useCarouselTop from "../utils/useCarouselTop";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const CarouselTop = () => {
  const slider = useRef(null);

  const carouselId = useParams();

  const carouselImg = useCarouselTop(carouselId);

  const image =
    carouselImg?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return carouselImg === null ? (
    <ShimmerCarousel />
  ) : (
    <div className="mx-16">
      <div className="flex items-center justify-between">
        <div className="mx-10">
          <h1 className="font-black text-3xl">What's on your mind?</h1>
        </div>
        <div className="">
          <button
            className="text-lg font-large  bg-gray-200 rounded-full mx-1 px-2 py-1 "
            onClick={() => slider.current.slickPrev()}
          >
            <IoIosArrowBack />{" "}
          </button>
          <button
            className="text-lg font-large  bg-gray-200 rounded-full mx-1 px-2 py-1"
            onClick={() => slider.current.slickNext()}
          >
            {" "}
            <IoIosArrowForward />{" "}
          </button>
        </div>
      </div>
      <Slider ref={slider} {...settings}>
        {image?.map((pic) => (
          <div className="p-5" key={pic?.id}>
            <img
              className="w-96  cursor-pointer"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_160,h_192/" +
                pic?.imageId
              }
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default CarouselTop;
