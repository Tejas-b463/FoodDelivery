import {CDN_URL} from "../utils/constant"

const RestaurantCard = (props) =>{
    const {resData} = props;

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} =resData?.info;
    return (
  <div className="max-w-xs rounded-lg hover:shadow-2xl p-2">
       <div className="h-72 w-full relative">
          <img className="rounded-3xl h-full w-full object-cover" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="rescard-logo" />
          <span className="absolute bottom-0 p-3 text-stone-50 text-2xl font-black">{resData?.info?.aggregatedDiscountInfoV3?.discountTag} {resData?.info?.aggregatedDiscountInfoV3?.header }</span>
       </div>
    
      
       
      <div className="py-4 mt-1">
     
           <h4 className="text-xl font-semibold  text-gray-900  px-2">{name}</h4>
           <p className="px-2 overflow-hidden text-ellipsis whitespace-nowrap w-[76%] leading-tight text-[rgb(0,0,0,0.7)]">{cuisines.join(", ")}</p>
           <div className="flex justify-between items-center ">
            <h4 className="bg-green-600 text-white rounded-lg m-2 p-2">{avgRating} &#9734;</h4>
            <div className="p-2">
            <p className="leading-tight text-[rgb(0,0,0,0.7)]"> {costForTwo}</p>
            <p>{resData.info.sla.deliveryTime} min</p>
            </div>
            </div>
      </div>
  </div>
    )
}
export default RestaurantCard;