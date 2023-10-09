import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
import { Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import CarouselTop from "./CarouselTop";
import CarouselCard from "./CarouselCard"
import {LuSearch} from "react-icons/lu"
import { SWIGGY_API } from "../utils/constant";



const Body = () =>{
    const[listOfRestaustant,SetlistOfRestaustant] = useState([]);
   const[filteredRestaurants, setFilteredRestaurats] = useState([]);

    const[searchText, setSearchText] = useState("");

   useEffect(()=>{
    fetchData();
   },[])

   const fetchData = async () => {
    const data = await fetch(
    SWIGGY_API
    );
    const jsonData = await data.json();
    console.log(jsonData)

    SetlistOfRestaustant(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurats(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   };
  

    
   
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Plase Check Your Internet Connection !!!</h1>

    return  listOfRestaustant?.length === 0 ?(<Shimmer/>):(
      
    <div className="m-10">
      <div className="">
       <CarouselTop/>
       <CarouselCard/>
      </div>
      <div className="">
        <h1 className="mx-24 font-black text-3xl">Restaurants with online food delivery </h1>
        <div className="mx-24 gap-x-10">
          <div className="mt-4">
            <input className="shadow-sm border-2 w-56 h-8" id="search" type="text" value={searchText} 
            onChange={(e)=>{
              setSearchText(e.target.value);
            }} />
            <button className="font-medium absolute p-2 left-[20.5rem]" onClick={()=>{
              // Filter the restaurant cards and update the UI
              // SearchText
              const searchList = listOfRestaustant?.filter((res)=>
                   res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurats(searchList);
            }}><LuSearch/></button>
          </div>
          <div className="mt-5">
           <button className="focus focus:bg-red-500 focus:text-white border focus:border-red-500 mx-2 hover:shadow-lg border-2 p-2 rounded-lg shadow-zinc-950 text-md font-medium" 
           onClick={()=>{
              const filteredList = listOfRestaustant?.filter(
                (res) => res.info.avgRating > 4
              );
              SetlistOfRestaustant(filteredList);
              setFilteredRestaurats(filteredList)
           }}> Ratings 4.0+ </button>
            <button className=" opacity-50 cursor-not-allowed mx-2 border-2 p-2 rounded-lg shadow-zinc-950 text-md font-medium" onClick={()=>{
              const filteredList = listOfRestaustant?.filter(
                (res) => res.info.avgRating > 4
              );
              SetlistOfRestaustant(filteredList);
              setFilteredRestaurats(filteredList)
           }}> Fast Devlivery </button>
            <button className="opacity-50 cursor-not-allowed disabled:opacity-75 mx-2 border-2 p-2 rounded-lg shadow-zinc-950 text-md font-medium" onClick={()=>{
              const filteredList = listOfRestaustant?.filter(
                (res) => res.info.avgRating > 4
              );
              SetlistOfRestaustant(filteredList);
              setFilteredRestaurats(filteredList)
           }}> ₹ 300 - ₹ 600 </button>
             <button className="opacity-50 cursor-not-allowed mx-2 border-2 p-2 rounded-lg shadow-zinc-950 text-md font-medium" onClick={()=>{
              const filteredList = listOfRestaustant?.filter(
                (res) => res.info.feeDetails.totalFee / 10 < 300
              );
              SetlistOfRestaustant(filteredList);
              setFilteredRestaurats(filteredList)
           }}> Less than ₹ 300 </button>
           </div>
           
        </div>
        </div>
        <div className="my-4 ">
          <div className="flex flex-wrap item-center justify-center gap-8">
          {filteredRestaurants?.map((restaurant) => (
         <Link key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}>
            <RestaurantCard resData={ restaurant}/>
            </Link>
          ))
          }
          </div>
        </div>
      
    </div>
  
    )
}
export default Body;