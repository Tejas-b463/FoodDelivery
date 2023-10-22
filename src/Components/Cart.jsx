import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import {clearCart} from "../utils/cartSlice"
import { Link } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast'


const Cart = () =>{

    const cartItems  = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch()

    const handleClearCart = () =>{
      toast.error('Item Clear', {
  position: "top-center"
})
        dispatch(clearCart())
    }
    return(
      <div className="">
        {
         
          cartItems.length == cartItems ||
          <button className="my-4 p-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white"
          onClick={
              handleClearCart
          }>Clear Cart
          </button>
          }
          <Toaster/>
       
        {cartItems.length === 0 &&  
        <div className=" flex my-10  flex-wrap justify-center">
          <img className="w-60" src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" alt="" />
        <div
        className="text-2xl text-gray-600 mx-16 my-20 leading-10">
       <p> Oops! Your cart is empty. </p>
        <p className=""> Hungry? Start adding delicious items </p>
         <Link className="py-2 text-blue-500 underline text-xl" to="/">Explore</Link>
         </div>
         </div>
        }
        <ItemList items={cartItems}/>
      </div>
    )
}
export default Cart