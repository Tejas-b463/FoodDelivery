import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import {LuSearch} from "react-icons/lu"
import {MdOutlineNetworkCheck} from "react-icons/md"
import { SWIGGY_API } from "../utils/constant"
import CarouselTop from "./CarouselTop"
import CarouselCard from "./CarouselCard"
import CarouselRestaurant from "./CarouselRestaurant"
import SearchAllRestaurant from "./SearchAllRestaurant"
import ShowButton from "./ShowButton"


const Body = () =>{
    const[listOfRestaustant,SetlistOfRestaustant] = useState([])
    const[filteredRestaurants, setFilteredRestaurats] = useState([])
    // const[searchText, setSearchText] = useState("")

   useEffect(()=>{
    fetchData()
   },[])

   const fetchData = async () => {
    const data = await fetch(
    SWIGGY_API
    )
    const jsonData = await data.json()
    console.log(jsonData)
    SetlistOfRestaustant(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
    setFilteredRestaurats(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }


    const onlineStatus = useOnlineStatus()
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
        <CarouselRestaurant/> 
      </div>
      <div className="">
        <h1 className="mx-20 font-black text-3xl">Restaurants with online food delivery </h1>
        <div className="flex items-center mx-20 gap-x-10 mt-4">
          {/* Search */}
          {/* <div className="">
            <input placeholder="Search for Food"  className="text-sm px-2  shadow-sm border-2 w-60 h-10 rounded-full" id="search" type="text" value={searchText} 
            onChange={(e)=>{
              setSearchText(e.target.value)
            }} /> 
            <button className="font-medium absolute  p-2 my-1 left-0 right-0 ml-80" onClick={()=>{
              const searchList = listOfRestaustant?.filter((res)=>
                   res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              setFilteredRestaurats(searchList)
              setSearchText('')
            }}><LuSearch/></button>
          </div>  */}
           {/* Rating 4.0+ */}
         <div>
            <button className="font-medium border border-gray-300 px-3 py-2 rounded-full text-gray-700" onClick={()=>{
              const filterList = listOfRestaustant.filter((res)=>
                 res.info.avgRating > 4
              );
              SetlistOfRestaustant(filterList)
              setFilteredRestaurats(filterList)
            }
            }>4.0+ Rating</button>
            </div>
            {/* Fast Delivery */}
            <div>
            <button className="font-medium border border-gray-300 px-3 py-2 rounded-full text-gray-700" onClick={()=>{
              const filterList = listOfRestaustant.filter((res)=>
                 res.info.sla.deliveryTime < 25
              )
              SetlistOfRestaustant(filterList)
              setFilteredRestaurats(filterList)
            }
            }>Fast Delivery</button>
           </div>
           {/* Veg */}
           <div className="font-medium border border-gray-300 px-3 py-2 rounded-full text-gray-700">
            <button onClick={()=>{
             const filterList = listOfRestaustant.filter((res)=>
             res.info.veg == true
          )
          SetlistOfRestaustant(filterList)
          setFilteredRestaurats(filterList)
            }}>Pure Veg</button>
           </div>
         </div>
        </div>
        <div className="my-10 sm:mx-14 md:mx-24 lg:mx-16  ">
          <div className="grid grid-cols-4 gap-14">
            {  filteredRestaurants?.map((restaurant) => (
         <Link key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}>
            <RestaurantCard resData={ restaurant}/>
            </Link>
          )) 
          }
         {/* Show More Restaurant */}
         <div>
          {
            filteredRestaurants.length !== 0 &&  <ShowButton/>
          }
          </div>
          </div>
          <div className= "flex items-center justify-center  text-lg font-bold">
          {filteredRestaurants?.length === 0 && 
          
                <SearchAllRestaurant/>
            }
             <ul>
      </ul>
          </div>
        </div> 
    </div>
    )
}
export default Body