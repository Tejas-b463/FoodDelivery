import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) =>{
        const dispatch = useDispatch();

        const handleAddItem = (item)  =>{
          // Dispatch an action
          dispatch(addItem(item))
        }
        
       return(
        
     <div>
          {items.map(item=> <div key={item.card.info.id} className="p-2 m-2 text-left"> 
       <div  className="flex justify-between items-center mb-8 ">  
          <div className="py-2">
                <h6 className="py-1">{item.card.info.name}</h6>
                <span>₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</span>
                <p className="leading-tight text-[rgb(0,0,0,0.7)] py-1">{item.card.info.description}</p>
             </div>
          <div className="w-28">
            <div className="absolute">
               <button className="p-2  px-8 mx-4 my-24 rounded-lg bg-white text-red-500 font-medium shadow-lg"
               onClick={() => handleAddItem(item)}
               >Add</button>
            </div>
            <div className="w-[118px] h-[96px] object-cover rounded-lg">
            <img className="rounded-lg" src={CDN_URL+item.card.info.imageId} alt="" />
            </div>
          </div>
         </div>
        </div> 
          )}
     </div>
        
       )
}
export default ItemList;