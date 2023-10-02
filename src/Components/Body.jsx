import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
import "../../style.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";




const Body = () =>{
    const[listOfRestaustant,SetlistOfRestaustant] = useState([]);
   const[filteredRestaurants, setFilteredRestaurats] = useState([]);

    const[searchText, setSearchText] = useState("");

    console.log("body render");

   useEffect(()=>{
    fetchData();
   },[])

   const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" 
    );
    const jsonData = await data.json();
    console.log(jsonData)
    // console.log(jsonData);
    // optional Chaining
    SetlistOfRestaustant(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    
    setFilteredRestaurats(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   };
  


   
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Plase Check Your Internet Connection !!!</h1>

    return  listOfRestaustant?.length === 0 ?(<Shimmer/>):(
    <div className="body">
        <div className="filter">
          <div className="search">
            <input className="search-box" id="search" type="text" value={searchText} 
            onChange={(e)=>{
              setSearchText(e.target.value);
            }} />
            <button className="search-btn" onClick={()=>{
              // Filter the restaurant cards and update the UI
              // SearchText
              console.log(searchText);

              const searchList = listOfRestaustant?.filter((res)=>
                   res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurats(searchList);

            }}>Search</button>
          </div>
           <button onClick={()=>{
              const filteredList = listOfRestaustant?.filter(
                (res) => res.info.avgRating > 4
              );
              SetlistOfRestaustant(filteredList);
              setFilteredRestaurats(filteredList)
           }}> Ratings 4.0+ </button>
        </div>
        <div className="rescard-container">
          {filteredRestaurants?.map((restaurant) => (
         <Link key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}>
            <RestaurantCard resData={ restaurant}/>
            </Link>
            
          ))
          }
        </div>
    </div>
    )
}
export default Body;