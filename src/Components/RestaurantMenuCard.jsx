import { useState } from "react"
import ItemCart from "./ItemCart"
import {IoIosArrowUp, IoIosArrowDown} from "react-icons/io"

// controlled compoenents
const RestaurantMenuCard = ({data}) =>{
  const [showItems, setShowItems] = useState([])
  const handleClick = () => {
    // setShowItems(!showItems)
    setShowItems(!showItems)
  }
  return(
    <div>
    {/* Headers */}
    <div className="w-6/12 p-4 mx-auto my-2">
      <div className="flex justify-between cursor-pointer"
       onClick={handleClick}>
      <span className="font-bold text-xl">{data.title} ({data.itemCards.length})</span>
      <span className="text-2xl">{showItems ?  <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
      </div>
      {/* Accordian Body */}
     { showItems &&  <ItemCart items={data.itemCards}/>}
    </div>
    </div>
  )
}
export default RestaurantMenuCard