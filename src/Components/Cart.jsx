import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice";
import { Link } from "react-router-dom";




const Cart = () =>{
    const cartItems  = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch()

    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    return(
      <div className="">
      <div className="">
        {
          cartItems.length == cartItems ||
          <button className=""
          onClick={
              handleClearCart
          }>Clear Cart
          </button>
       
        }
       
        {cartItems.length === 0 &&  
        
            
        
        <div className=" flex my-10  flex-wrap justify-center">
          <img className="w-56" src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" alt="" />
        <h1
        className="text-2xl text-gray-600 mx-16 my-20 leading-10">
       <p> Oops! Your cart is empty. </p>
        <p className=""> Hungry? Start adding delicious items </p>
         <Link className="py-2 text-blue-500 underline text-xl" to="/">Explore</Link>
         
         </h1>
        
         </div>
         
        }
        </div>
        <ItemList items={cartItems}/>
      </div>
    )
}
export default Cart;