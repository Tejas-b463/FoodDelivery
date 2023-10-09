// import ItemList from "./ItemList";
import ItemCart from "./ItemCart"
import {IoIosArrowDown} from 'react-icons/io'

// controlled compoenents
const RestaurantMenuCard = ({data,showItems,setShowIndex}) =>{
// when he has won state that's uncontrolled componenets
  const handleClick = () =>{
      //  setShowItems(!showItems)
    setShowIndex();
  }
  return(
    <div>
    {/* Headers */}
    <div className="w-6/12 p-4 mx-auto my-8">
      <div className="flex justify-between cursor-pointer"
       onClick={handleClick}>
      <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
      <span><IoIosArrowDown/></span>
      </div>
      {/* Accordian Body */}
     { showItems &&  <ItemCart items={data.itemCards}/>}
    </div>
    
    </div>
  )
}
export default RestaurantMenuCard;