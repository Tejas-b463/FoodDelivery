import React from 'react'
import { IMG_CDN_URL } from './constants'

const RestaurantCard = ({
  name,
  avgRating,
  cuisines,
  cloudinaryImageId,
  costForTwo,
  sla,
  city,
  aggregatedDiscountInfoV3
}) => {
  const discountHeader = aggregatedDiscountInfoV3?.header;
  const discountSubHeader = aggregatedDiscountInfoV3?.subHeader;
 
  const timeDelivery = sla?.deliveryTime;

  return (
    <div className="w-[17rem]  rounded-lg hover:shadow-2xl p-2">
    <div className="relative">
       <img className="rounded-lg object-cover" src= {IMG_CDN_URL + cloudinaryImageId} alt="rescard-logo" />
       <span className="absolute rounded-lg bg-gradient-to-t from-black bottom-0 p-3 w-full font-black text-stone-50 text-xl ">{ discountHeader} {discountSubHeader}</span>
    </div>
   <div className="py-4 ">
        <h4 className="text-xl font-semibold  text-gray-900  px-2">{name}</h4>
        <p className="px-2 overflow-hidden text-ellipsis whitespace-nowrap w-[76%] leading-tight text-[rgb(0,0,0,0.7)]">{cuisines.join(", ")}</p>
        <div className="flex justify-between items-center ">
         <h4 className="bg-green-600 text-white rounded-lg m-2 p-2">{avgRating} &#9734;</h4>
         <div className="p-2">
         <p className="leading-tight text-[rgb(0,0,0,0.7)]"> {costForTwo}</p>
         <p>{timeDelivery} min</p>
         <p>{city}</p>
         </div>
         </div>
   </div>
</div>
   
  )
}

export default RestaurantCard