import {useDispatch} from "react-redux"
import {removeItem} from "../utils/cartSlice"
import { MENU_IMG } from "../utils/constant";

const ItemList = ({items}) =>{

  const dispatch = useDispatch()

  const totalItem =  items.length > 0 ? items.map((bill)=>
  (bill.card.info.price > 0 ? bill.card.info.price/100 : bill.card.info.defaultPrice/100))
  .reduce((sum,a)=> sum + a,0):0;
  const platFormFee = 5;
  // const Discount = (totalItem)/100;
  const toPay = (totalItem  + platFormFee);

       return(
     <div className="grid grid-cols-2 justify-center my-12">
      <div className="mx-56">
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
               <button className="my-2 text-gray-500 border border-gray-300 px-2 rounded" onClick={()=>dispatch(removeItem(item.card.info.id))
              }>Remove</button>  
            </div>
          </div>            
)}
 </div>
 {items.length == items ||
 <div className=" bg-white shadow mx-56 p-10">
            <h1 className="text-lg">Bill Details</h1>
          {/* Item Total */}
          <div className="flex items-center justify-between my-2">
          <p className="py-2 text-[rgba(0,0,0,0.7)]">Item Total</p>
          <p className="py-2 text-[rgba(0,0,0,0.7)] pl-4">₹{totalItem.toFixed(0)}</p>
          </div>
          {/* Delivery Time */}
          <div className="flex items-center justify-between  my-2">
          <p className="py-2 text-[rgba(0,0,0,0.7)]">Delivery Time</p> 
          <p className="py-2 text-[rgba(0,0,0,0.7)] pl-4">23 min</p> 
          </div>
          {/* Delivery Tip */}
          <div className="flex items-center justify-between my-2">
          <p className="py-2 text-[rgba(0,0,0,0.7)]">Delivery Tip</p>
          <p className="py-2  text-red-400 pl-4">Add tip</p> 
          </div>
          {/* Platform Fee */}
          <div className="flex items-center my-2  justify-between ">
          <p className="py-2 text-[rgba(0,0,0,0.7)] ">Platform Fee</p> 
          <div className="flex items-center py-2 pl-4">
            <span className=" text-gray-500 line-through pl-4">₹7.00</span>
            <p className="px-2 text-[rgba(0,0,0,0.7)]">{platFormFee.toFixed(0)}</p>
            </div>
          </div>
          {/* Total Amount */}
          <div className="flex items-center justify-between border-t-2 my-2 border-gray-700]">
          <p className="py-2 font-bold text-lg leading-6">Top Pay</p>
          <p className="py-1 font-bold text-lg ">₹{toPay.toFixed(0)}</p>
          </div>
 <div className="p-2 mx-6">
            <button className="px-4 py-2 m-2 bg-green-500 text-white hover:shadow-lg rounded-lg"
            onClick={()=>
              alert("working on place order")
            }
            >Place Order</button>
          </div>
          </div>
}
          </div>
       )
}
export default ItemList;

