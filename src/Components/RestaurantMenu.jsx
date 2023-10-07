
import Shimmer from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard"
import { useParams } from "react-router-dom";
import useRetaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import {ImStarEmpty} from "react-icons/im"
import { CDN_URL } from "../utils/constant";



const RestaurantMenu = () =>{

  const {resId}= useParams();

  const resMenu = useRetaurantMenu(resId)

  const[showIndex, setShowIndex] = useState(0);

  if(resMenu === null) return <Shimmer/>

  const{name,cuisines,areaName,city,avgRating,totalRatingsString,cloudinaryImageId
  } = resMenu?.cards[0]?.card?.card?.info;

 const categories = 
  resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => 
    c.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  console.log(categories)


  return (
    <div className="">
    <div className="my-8 flex items-center justify-center   gap-x-96 text-left">
      <div className="flex">
        <div>
        <img className="w-20 mx-3 rounded-lg" src={CDN_URL+cloudinaryImageId} alt="" />
        </div>
        <div>
    <h1 className="font-bold text-2xl">{name}</h1>
    <p className="my-1 overflow-hidden text-ellipsis whitespace-nowrap w-[120%] leading-tight text-[rgb(0,0,0,0.5)]">{cuisines.join(", ")}</p>
    <p className="leading-tight text-[rgb(0,0,0,0.6)]">{areaName}, {city}</p>
    </div>
    </div>
    <div className="">
    <h6 className="bg-green-600 flex text-white py-2 px-1 rounded-lg items-center m-1"><ImStarEmpty className="mx-1"/>{avgRating}</h6>
    <p leading-tight className="text-[rgb(0,0,0,0.5)] text-sm">{totalRatingsString}</p>
    </div>
    </div>
  
    <div className="">
   {/* categories accordions */}
  {categories?.map((category,index)=>(
    // Controlled Components
    <RestaurantMenuCard key={category.card.card.title} data={category?.card?.card}
    showItems = {index === showIndex ? true : false}
    setShowIndex={()=>setShowIndex(index)}
    />
  ))}
    
  
     </div>
      </div>
  )
}
export default RestaurantMenu;