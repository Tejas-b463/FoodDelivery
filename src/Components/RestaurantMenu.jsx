
import Shimmer from "./Shimmer";
import RestaurantMenuCard from "./RestaurantMenuCard"
import { useParams } from "react-router-dom";
import useRetaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = () =>{

  const {resId}= useParams();

  const resMenu = useRetaurantMenu(resId)

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
      <summary>{resMenu?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title}</summary>
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