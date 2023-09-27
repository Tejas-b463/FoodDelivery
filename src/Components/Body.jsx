import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"


const Body = () =>{
    const[listOfRestaustant,SetlistOfRestaustant] = useState([])

   useEffect(()=>{
    fetchData();
   },[])

   const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=18.4848527&lng=73.8279381" 
    );
    const jsonData = await data.json()
    console.log(jsonData);
    // optional Chaining
    SetlistOfRestaustant(jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
   };
// Conditioal Rendering
  //  if(listOfRestaustant.length === 0){
  //   return <Shimmer/>
  //  }

    return listOfRestaustant.length === 0 ?(<Shimmer/>):(
    <div className="body">
        <div className="filter">
           <button onClick={()=>{
              const filteredList = listOfRestaustant.filter(
                (res) => res.info.avgRating > 4
              );
              SetlistOfRestaustant(filteredList);
           }}> Ratings 4.0+ </button>
        </div>
        <div className="rescard-container">
          {listOfRestaustant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={ restaurant}/>))
          }
        </div>
    </div>
    )
}
export default Body;