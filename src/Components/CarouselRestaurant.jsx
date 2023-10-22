import { useEffect, useState } from "react"
import { SWIGGY_API } from "../utils/constant"
import { ScrollingCarousel } from '@trendyol-js/react-carousel'
import { Link } from "react-router-dom"
import {PiStarThin} from "react-icons/pi"
import ShimmerCarousel from "./ShimmerCarousel"


const CarouselRestaurant = () => {
    const[carouselRestaurant, setCarouselRestaurant] = useState([])
      
  
    useEffect(()=>{
       resData()
    },[])

    const resData = async() => {
        const data = await fetch(SWIGGY_API)
        const json = await data.json(data)
        // console.log(json)
        // setCarouselRestaurant(json)
        const resdata = json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setCarouselRestaurant(resdata)
    }

return carouselRestaurant.length === 0 ? (<ShimmerCarousel/>) : (
  <div>
 <h1 className="mx-24 font-black text-3xl">Top restaurant chains</h1>
    <div className="flex h-auto ml-14 mr-28 justify-stretch items-center">
      <ScrollingCarousel>
  {
    carouselRestaurant?.map((res)=>(
      <Link key={res.info.id}  to={"/restaurants/"+res.info.id}>
        <div key={res.info.id} className=" top-0 w-[19.9rem]  rounded-lg left-0 p-4 ">
          <div className="overflow-hidden relative">
            <img className="h-48 w-full rounded-lg object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+res.info.cloudinaryImageId} alt="" />
            <span className="absolute rounded-lg bg-gradient-to-t from-black bottom-0 p-3 w-full font-black text-stone-50 text-xl ">{res?.info?.aggregatedDiscountInfoV3?.header} {res?.info?.aggregatedDiscountInfoV3?.subHeader }</span>
            </div>
            <div className="py-2">
            <h1 className="overflow-hidden text-lg whitespace-nowrap w-[92%] leading-tight">{res.info.name}</h1>
            <p className="flex items-center gap-1">{res.info.avgRating} <PiStarThin className="text-green-700"/></p>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap w-[100%] leading-tight text-gray-500">{res.info.cuisines.join(", ")}</p>
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
export default CarouselRestaurant