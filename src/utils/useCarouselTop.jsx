// import {CAROUSEL_DATA} from "../utils/constant"
import { useState, useEffect } from "react"

const useCarouselCard = (carouselId) =>{
     const[carouselImg, setCarouselImg] = useState(null)

      useEffect(()=>{
         fetchImages();
    },[])

    const fetchImages = async() =>{
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.5204303&lng=73.8567437" + carouselId);
        const json = await data.json();
        console.log(json);
        setCarouselImg(json.data)
    }
    return carouselImg;

}
export default useCarouselCard