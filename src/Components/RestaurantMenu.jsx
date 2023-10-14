import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import Shimmer from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard"
import { useParams } from "react-router-dom";
import useRetaurantMenu from "../utils/useRestaurantMenu";
import {ImStarEmpty} from "react-icons/im"
import {MdOutlineLocalOffer} from "react-icons/md"

const RestaurantMenu = () =>{

  const {resId}= useParams();

  const resMenu = useRetaurantMenu(resId)


  if(resMenu === null) return <Shimmer/>

  const{name,cuisines,areaName,city,avgRating,totalRatingsString,cloudinaryImageId
  } = resMenu?.cards[0]?.card?.card?.info;

  const offerCards = resMenu?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
  console.log(offerCards)

 const categories = 
  resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => 
    c.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  // console.log(categories)
  
  return (
    <div className="">
    <div className="my-6 p-2 mx-2 flex items-center justify-center gap-x-96 text-left">
      <div className="flex">
        <div>
        <img className="w-20 mx-3 rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+cloudinaryImageId} alt="" />
        </div>
        <div>
    <h1 className="font-bold text-2xl">{name}</h1>
    <p className="my-1 overflow-hidden text-ellipsis whitespace-nowrap w-[120%]  text-[rgb(0,0,0,0.5)]">{cuisines.join(", ")}</p>
    <p className=" text-[rgb(0,0,0,0.6)]">{areaName}, {city}</p>
    </div>
    </div>
    <div className="">
    <h6 className="bg-green-600 flex text-white py-2 px-1 rounded-lg items-center m-1"><ImStarEmpty className="mx-1"/>{avgRating}</h6>
    <p leading-tight className="text-[rgb(0,0,0,0.5)] text-sm">{totalRatingsString}</p>
    </div>
   
    </div>
    {/* Offers */}
    <div className=" ml-96 p-2 w-[740px]">
    <ScrollingCarousel>
    {offerCards?.map((offer)=>(
      <div className="px-4 border p-3 rounded-lg mx-2" key={offer?.info?.id}>
        <div className="flex gap-2 items-center ">
         <MdOutlineLocalOffer/>
        <h1 className="text-md font-bold">{offer?.info?.header}</h1>
        </div>
        <div className="flex gap-2 text-xs  font-bold ml-1 text-gray-500">
     <p>{offer?.info?.couponCode}</p>
     <span>|</span>
     <span> {offer?.info?.description}</span>
     </div>
      </div>
    ))}
     </ScrollingCarousel>
    </div>
  
   
    <div className="">
  {categories?.map((category)=>(
    <RestaurantMenuCard
     key={category.card.card.title}
     data={category?.card?.card}
    />
  ))}
     </div>
      </div>
  )
}
export default RestaurantMenu;