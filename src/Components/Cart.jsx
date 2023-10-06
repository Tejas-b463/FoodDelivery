import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice";



const Cart = () =>{

    const cartItems  = useSelector((store)=> store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    return(
      <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-9/12 m-auto">
        <button className="opacity-50 mx-2 border-2 p-2 rounded-lg shadow-zinc-950 text-md font-medium"
        onClick={
            handleClearCart
        }
        >Clear Cart</button>
      
        {cartItems.length === 0 && <h1
        className="text-2xl mt-20 opacity-60 mx-2 border-2 rounded-lg shadow-zinc-950 text-md font-medium p-10">
        "Oops! Your cart is empty. Hungry? Start adding delicious items!" 🛒</h1>}
        </div>
        <ItemList items={cartItems}/>
      </div>
      
    )
}
export default Cart;