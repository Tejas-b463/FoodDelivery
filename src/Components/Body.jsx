import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
import "../../style.css"


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
      "https://www.swiggy.com/mapi/homepage/getCards?lat=20.9319821&lng=77.7523039" 
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    // optional Chaining
    SetlistOfRestaustant(jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurats(jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
   };
  

   
// Conditioal Rendering
  //  if(listOfRestaustant.length === 0){
  //   return <Shimmer/>
  //  }

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
            <RestaurantCard key={restaurant.info.id} resData={ restaurant}/>))
          }
        </div>
    </div>
    )
}
export default Body;