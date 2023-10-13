import { useDispatch } from "react-redux";
import { MENU_IMG } from "../utils/constant";
import { removeItem } from "../utils/cartSlice";

const ItemList = ({items}) =>{
        const dispatch = useDispatch();

        const handleRemoveItem = (item)  =>{
          // Dispatch an action
          dispatch(removeItem(item))
        }
       return(
      
        
     <div>
          {items.map(item=> <div key={item.card.info.id} className=""> 
            <img className="" src={MENU_IMG+item.card.info.imageId} alt="" />
              <h2 className="">{item.card.info.name}</h2>
              <p className="">₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</p>
                  <button className=" rounded-lg bg-white text-red-500 font-medium shadow-lg"
               onClick={() => handleRemoveItem(item.card.info.id)}
               >X</button>
                </div>
            
          )}
     </div>
        
       )
}
export default ItemList;