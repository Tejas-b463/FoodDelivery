import { CDN_URL } from "../utils/constant";

const ItemList = ({items}) =>{
  // console.log(items);
       return(
        
         <div>
          {items.map(item=> <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left"> 
          <div className="flex justify-between">  
          <div className="py-2 ">
          <h6>{item.card.info.name}</h6>
          <span>₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</span>
          <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="p-4  w-3/12">
          <div className="absolute">
            <button className="p-2 px-6 mx-8 my-20 rounded-lg bg-white text-green-600 font-medium shadow-lg">Add</button>
            </div>
            <img src={CDN_URL+item.card.info.imageId} alt="" className=" rounded-md w-full" />
          </div>
          </div>
          </div> 
          )}
       </div>
        
       )
}
export default ItemList;