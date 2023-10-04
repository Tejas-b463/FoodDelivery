import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantMenuCard = ({data}) =>{

  const[showItems, setShowItems] = useState(false)

  const handleClick = () =>{
       setShowItems(!showItems)
  }
  
  return(
    <div>
    {/* Headers */}
    <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-8">
      <div className="flex justify-between cursor-pointer"
       onClick={handleClick}>
      <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
      <span>⬇️</span>
      </div>
      {/* Accordian Body */}
     { showItems &&  <ItemList items={data.itemCards}/>}
    </div>
    
    </div>
  )
}
export default RestaurantMenuCard;