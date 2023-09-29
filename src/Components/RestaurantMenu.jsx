import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const RestaurantMenu = () =>{

    const[resInfo, setResInfo] = useState(null);

      useEffect(()=>{
         fetchMenu();
      },[])

      const fetchMenu = async() =>{
          const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.9319821&lng=77.7523039&restaurantId=220302&submitAction=ENTER");

          const json = await data.json();

          console.log(json);
          setResInfo(json.data);
      }

      

      if(resInfo === null) return   <Shimmer/>;

      const {name, cuisines, costForTwoMessage, avgRating, totalRatings} = resInfo?.cards[0]?.card?.card?.info;


      const{itemCards} = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
     
      
        return (
            
            <div className="div res-menu-card">
            <div className="res-details">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwoMessage}</p>
            <p>{avgRating}</p>
            <p>{totalRatings}+ Rating</p>
            </div>
            <div className="menu">
              {itemCards.map(item =>
              <div key={item.card.info.id} className="anem">
                 <h1>{item.card.info.name }</h1>
                 <p>&#8377; {item.card.info.price/100}</p>
                 </div>
               
                 )}  
            </div>
            </div>
            
        )
     

   
}
export default RestaurantMenu;