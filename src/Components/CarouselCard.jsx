import { useEffect, useRef, useState } from "react"
import { CDN_URL } from "../utils/constant"
import Slider from "react-slick";
import ShimmerCarousel from "./ShimmerCarousel";



const CarouselTop = () =>{
    const slider = useRef(null)
    const[carouselImg, setCarouselImg] = useState(null)
   
    useEffect(()=>{
         fetchImages();
    },[])

    const fetchImages = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setCarouselImg(json.data)
    }
   
    const image = carouselImg?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle?.info;
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
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
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

     
        return carouselImg === null ? <ShimmerCarousel/> :  (
          <div className="mx-16">
          <div className="flex items-center justify-between">
          <div className="mx-10">
           <h1 className="font-black text-3xl">Best offers for you</h1>
          </div>
          <div className="">
           <button className="text-lg font-large px-1.5 text-4xl bg-gray-200 rounded-full mx-1 px-4 py-1 " onClick={()=> slider.current.slickPrev()}> &#x2039; </button>
           <button className="text-lg font-large px-1.5 text-4xl bg-gray-200 rounded-full mx-1 px-4 py-1" onClick={()=> slider.current.slickNext()}> &#x203A; </button>
           </div>
          </div>
           <Slider ref={slider} {...settings}>
              {
                image?.map((pic)=>(
                 <div className="p-5" key={pic.id}>
                 <img className="w-96 cursor-pointer" src={CDN_URL+pic.imageId} alt="" />
                 </div>
                ))
               }
           </Slider>
         </div>
          )
}
export default CarouselTop

