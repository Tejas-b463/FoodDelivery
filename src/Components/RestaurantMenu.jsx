
import Shimmer from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard"
import { useParams } from "react-router-dom";
import useRetaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";



const RestaurantMenu = () =>{

  const {resId}= useParams();

  const resMenu = useRetaurantMenu(resId)

  const[showIndex, setShowIndex] = useState(0);

  if(resMenu === null) return <Shimmer/>

  const{name,cuisines,areaName,city,avgRating,totalRatingsString} = resMenu?.cards[0]?.card?.card?.info;

  // const{itemCards} = resMenu?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards)
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
      <div className="">
    <h1 className="font-bold text-2xl py-1">{name}</h1>
    <p className=" overflow-hidden text-ellipsis whitespace-nowrap w-[120%] leading-tight text-[rgb(0,0,0,0.7)]">{cuisines.join(", ")}</p>
    <p>{areaName}, {city}</p>
    </div>
    <div>
    <h6 className="bg-green-600 text-white rounded-lg m-2 p-2">&#11088;{avgRating}</h6>
    <p>{totalRatingsString}</p>
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