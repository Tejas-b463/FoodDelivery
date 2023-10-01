import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {MENU_URL}  from "../utils/constant"
import RestaurantMenuCard from "./RestaurantMenuCard"
import "../style/RestaurantMenu.css"



const RestaurantMenu = () =>{

  const[resMenu, setResMenu] = useState(null);

  const {resId}= useParams();
  

  useEffect(()=>{
      fetchMenu();
  },[])

  const fetchMenu = async () =>{
    const data = await fetch(MENU_URL+resId)

    const json = await data.json();

    console.log(json);
    setResMenu(json.data);
  }

  if(resMenu === null) return <Shimmer/>

  const{name,cuisines} = resMenu?.cards[0]?.card?.card?.info;

  const{itemCards} = resMenu?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards)


  return (
    <div className="res-menu-container">
    <div className="menu-top">
    <h1>{name}</h1>
    <p>{cuisines.join(", ")}</p>
    </div>
   
    <div className="menu">
    <details>
      <summary></summary>
     {itemCards?.map((item) =>(
      <RestaurantMenuCard  key={item.card.info.id} resMenu={item}/>
    ))  
   }
    </details>
  
     </div>
   
      </div>
  )
}
export default RestaurantMenu;