
import { MENU_IMG } from "../utils/constant";

const ItemList = ({items}) =>{
       

       return(
     <div className="flex justify-center my-12">
      <div className="mx-12">
          {items.map(item=> <div key={item.card.info.id} className=""> 
          <div className="flex py-2">
            <img className="w-24 h-24 rounded-md" src={MENU_IMG+item.card.info.imageId} alt="" />
             <div className="mx-4">
              <h2 className="">{item.card.info.name}</h2>
              <p className="my-1">₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</p>
              <div className="flex items-center w-16 h-8 justify-center border border-gray-500">
                <span className="cursor-pointer text-3xl text-[rgba(0,0,0,0.5)]">-</span>
                <input className="w-6 text-center text-sm" type="text" placeholder="4" />
                <span className="cursor-pointer text-2xl text-green-600">+</span>
               </div>
               </div>
                </div>
                </div>
          )}
          </div>
         <div className="mx-12">
            <h1 className="text-lg">Bill Details</h1>
            <div className="flex ">
          <div className="my-2">
            <p className="py-2 text-[rgba(0,0,0,0.7)]">Item Total</p> 
            <p className="py-2 text-[rgba(0,0,0,0.7)]">Delivery Time</p> 
            <p className="py-2 text-[rgba(0,0,0,0.7)]">Delivery Tip</p> 
            <p className="py-2 text-[rgba(0,0,0,0.7)] ">Platform Fee</p> 
           
            </div>
            <div className="px-12 my-2">
            <p className="py-2 text-[rgba(0,0,0,0.7)]">₹ 290</p>
            <p className="py-2 text-[rgba(0,0,0,0.7)]">23 min</p> 
            <p className="py-2  text-red-400">Add tip</p> 
            <div className="flex items-center py-2">
            <span className=" text-gray-500 line-through">₹5.00</span>
           <p className="px-2 text-[rgba(0,0,0,0.7)]">0</p>
            </div>
           
            </div>
          </div>
          <div className="flex items-center border-t-2 my-2 border-[rgba(0,0,0,0.7)]">
          <p className="py-2 font-bold text-lg leading-6">Top Pay</p>
          <p className="py-1 font-bold text-lg mx-20">₹ 290</p>
          </div>
          </div>
     </div>
        
       )
}
export default ItemList;