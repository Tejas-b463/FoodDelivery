import { useState, useEffect } from "react";
import {CAROUSEL_DATA} from "../utils/constant"

const useCarouselCard = (carouselId) =>{

         const[carouselImg, setCarouselImg] = useState(null)

         useEffect(()=>{
            fetchImages();
       },[])

    const fetchImages = async() =>{
        const data = await fetch(CAROUSEL_DATA + carouselId);
        const json = await data.json();
        // console.log(json);
        setCarouselImg(json.data)
    }
      return carouselImg;
}
export default useCarouselCard