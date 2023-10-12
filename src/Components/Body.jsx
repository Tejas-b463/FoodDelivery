import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
import { Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import CarouselTop from "./CarouselTop";
import CarouselCard from "./CarouselCard"
import {LuSearch} from "react-icons/lu"
import {MdOutlineNetworkCheck} from "react-icons/md"
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

    SetlistOfRestaustant(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurats(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   };
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return (
      <div className="p-2">
       <MdOutlineNetworkCheck/>
     <h1>
      Plase Check Your Internet Connection !!!
      </h1>
      </div>
    )

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
            <input placeholder="Search for Food"  className="text-sm px-1  shadow-sm border-2 w-56 h-8" id="search" type="text" value={searchText} 
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
              setSearchText('');
            }}><LuSearch/></button>
          
          </div>
          <div className="mt-5">
          <button className="focus focus:bg-red-500 focus:text-white border focus:border-red-500  border-2 py-2 px-4 rounded-full  text-md font-medium" 
           onClick={()=>{
              const filteredList = listOfRestaustant?.filter(
                (res) => res.info.avgRating > 4
              );
              SetlistOfRestaustant(filteredList) 
              setFilteredRestaurats(filteredList) 
           }}> Ratings 4.0+
            </button> 
           </div>
           
        </div>
        </div>
        <div className="my-6 mx-16 ">
          <div className="grid grid-cols-4 gap-14">
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