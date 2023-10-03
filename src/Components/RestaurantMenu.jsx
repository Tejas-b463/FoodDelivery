
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

  // console.log(itemCards)
 const categories = 
  resMenu?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => 
    c.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  console.log(categories)


  return (
    <div className="text-center">
    <div className="">
    <h1 className="font-bold text-2xl my-8">{name}</h1>
    <p className="font-medium text-lg">{cuisines.join(", ")}</p>
    </div>
   
    <div className="menu">
   
     
     {categories?.map((category) =>{
      <RestaurantMenuCard data={category?.card?.card}/>
     })  
   }
  
     </div>
      </div>
  )
}
export default RestaurantMenu;