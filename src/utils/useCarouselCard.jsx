import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constant";

const useCarouselCard = (carouselId) => {
  const [carouselImg, setCarouselImg] = useState(null);
  useEffect(() => {
    fetchImages();
  }, []);
  const fetchImages = async () => {
    const data = await fetch(SWIGGY_API + carouselId);
    const json = await data.json();
    // console.log(json)
    setCarouselImg(json.data);
  };
  return carouselImg;
};
export default useCarouselCard;
