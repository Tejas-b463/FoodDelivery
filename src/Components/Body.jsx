import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () =>{
    const[listOfRestaustant,SetlistOfRestaustant] = useState(resList)
    return(
    <div className="body">
        <div className="filter">
           <button onClick={()=>{
              const filteredList = listOfRestaustant.filter(
                (res) => res.info.avgRating > 4
              );
              SetlistOfRestaustant(filteredList);
           }}>Ratings 4.0+</button>
        </div>
        <div className="rescard-container">
          {
            (listOfRestaustant.map((restaurant) => 
            <RestaurantCard key={restaurant.info.id} resData={ restaurant}/>))
          }
        </div>
    </div>
    )
}
export default Body;