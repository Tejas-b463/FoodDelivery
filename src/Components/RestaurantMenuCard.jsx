import { MENU_IMG } from "../utils/constant";
import ItemList from "./ItemList";
const RestaurantMenuCard = ({data}) =>{
  
            

    return(
      <div>
  {/* header  */}
    <div className="mx-auto my-6 w-6/12 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between">
      <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
      <span>🔻</span>
      </div>
       {/* Accordian */}
 <ItemList items={data.itemCards}/>
    </div>
   
    </div>
    )
}
export default RestaurantMenuCard;