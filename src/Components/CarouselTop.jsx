import { useRef } from "react"
import { CDN_URL } from "../utils/constant"
import Slider from "react-slick";
import ShimmerCarousel from "./ShimmerCarousel";
import { useParams } from "react-router-dom";
import useCarouselTop from "../utils/useCarouselTop"




const CarouselTop = () =>{
    const slider = useRef(null)
   

    const carouselId = useParams();

    const carouselImg = useCarouselTop(carouselId)
   
   
    const image = carouselImg?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
    console.log(image);

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
        arrows:false,
        speed: 700,
        slidesToShow: 6,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
        
      }

     
        return carouselImg === null ? <ShimmerCarousel/> : (
          <div className="mx-16">
          <div className="flex items-center justify-between">
          <div className="mx-10">
           <h1 className="font-black text-3xl">What's on your mind?</h1>
          </div>
          <div className="">
           <button className="text-lg font-large px-1.5 text-4xl bg-gray-200 rounded-full mx-1 px-4 py-1 " onClick={()=> slider.current.slickPrev()}> &#x2039; </button>
           <button className="text-lg font-large px-1.5 text-4xl bg-gray-200 rounded-full mx-1 px-4 py-1" onClick={()=> slider.current.slickNext()}> &#x203A; </button>
           </div>
          </div>
           <Slider ref={slider} {...settings}>
              {
                image?.map((pic)=>(
                 <div className="p-5" key={pic.info.id}>
                 <img className="w-56 cursor-pointer" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+pic.info.cloudinaryImageId
} alt="" />
                 </div>
                ))
               }
           </Slider>
         </div>
          )
}
export default CarouselTop

