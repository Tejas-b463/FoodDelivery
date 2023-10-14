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
      <div className="">
      <div className="">
        <button className=""
        onClick={
            handleClearCart
        }>Clear Cart
        </button>
        {cartItems.length === 0 && <h1
        className="">
        "Oops! Your cart is empty. Hungry? Start adding delicious items!" 🛒</h1>
        }
        </div>
        <ItemList items={cartItems}/>
      </div>
    )
}
export default Cart;