import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constant";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { Link } from "react-router-dom";
import {PiStarThin} from "react-icons/pi"


const CarouselRestaurant = () => {
    const[carouselRestaurant, setCarouselRestaurant] = useState([]);
      
  
    useEffect(()=>{
       resData();
    },[])

    const resData = async() => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json(data);
        // console.log(json);
        // setCarouselRestaurant(json);
        const resdata = json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setCarouselRestaurant(resdata);
    }

   
   
    
return(
  <div>
 <h1 className="mx-24 font-black text-3xl">Top restaurant chains</h1>
    <div className="flex h-auto ml-14 mr-28 justify-stretch items-center">
      <ScrollingCarousel>
  {
    carouselRestaurant?.map((res)=>(
      <Link key={res.info.id}  to={"/restaurants/"+res.info.id}>
        <div key={res.info.id} className=" top-0 rounded-lg left-0 p-4 ">
          <div className="overflow-hidden relative">
            <img className=" w-[22rem] h-56 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+res.info.cloudinaryImageId} alt="" />
            <span className="absolute w-[22rem] bg-gradient-to-t from-black bottom-0 p-2 rounded-xl font-black text-stone-50 text-xl ">{res?.info?.aggregatedDiscountInfoV3?.header} {res?.info?.aggregatedDiscountInfoV3?.subHeader }</span>
            </div>
            <div className="py-2">
            <h1 className="text-xl font-semibold w-96  text-gray-900">{res.info.name}</h1>
            <p className="flex items-center gap-1  ">{res.info.avgRating} <PiStarThin className="text-green-700"/></p>
            <p className="text-gray-400 w-72">{res.info.cuisines.join(", ")}</p>
            </div>
        </div>
        </Link>
    ))
  }
  </ScrollingCarousel>
</div>
</div>
)
}
export default CarouselRestaurant;