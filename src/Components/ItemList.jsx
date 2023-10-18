
import {useDispatch} from "react-redux"
import {removeItem} from "../utils/cartSlice"
import { MENU_IMG } from "../utils/constant";


const ItemList = ({items}) =>{


  const dispatch = useDispatch()

  
  // const totalItem =  items.length > 0 ? items.map((bill)=>
  // (bill.card.info.price > 0 ? bill.card.info.price/100 : bill.card.info.defaultPrice/100))
  // .reduce((sum,a)=> sum + a,0):0;
  // const platFormFee = 5;
  // // const Discount = (totalItem)/100;
  // const toPay = (totalItem  + platFormFee);

       return(
     <div className="flex  justify-center my-12">
      <div className="mx-12">
          {items && items.map(item=> 
          <div key={item.card.info.id} className="flex my-12"> 
            <img className="w-24 h-24 rounded-md" src={MENU_IMG+item.card.info.imageId} alt="" />
             <div className="mx-8">
              <h2 className="">{item.card.info.name}</h2>
              <p className="my-1">₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</p>
              <div className="flex items-center w-16 h-8 justify-center border border-gray-500">
                <span className="cursor-pointer text-3xl text-[rgba(0,0,0,0.5)]">-</span>
                <input className="w-6 text-center text-sm" type="text" placeholder="4" />
                <span className="cursor-pointer text-2xl text-green-600">+</span>
               </div>
               <button onClick={()=>dispatch(removeItem(item.card.info.id))}>Remove</button>  
               </div>
                </div> 
                
                
)}
          </div>
          </div>
       )
}
export default ItemList;

