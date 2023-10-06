import { useState } from "react";
import { Link } from "react-router-dom";
import {BiSolidOffer} from "react-icons/bi"
import {SiCarto} from "react-icons/si"
import { LOGO_URL } from "../utils/constant";
import {SiBigcartel} from "react-icons/si"
import { useSelector } from "react-redux";






const Header = () =>{
    
   

    const[btnNameReact, setBtnNameReact] = useState("Sign In")

    // Subscribing to the store using a selector
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems)

    return(
    <nav className="flex justify-between items-center px-10 py-5 shadow-lg">
          <div>
             <h1 className="text-3xl font-bold  ">
              <Link className="flex item-center" to="/">InstantEats 
              <img className="w-12 h-10 mx-1" src={LOGO_URL} alt="" />
              </Link>
             </h1>
          </div>
            <div className="flex justify-between items-center">
               <ul className="flex gap-x-10">
                   <li className=" text-lg">
                    <Link className="flex items-center text-[rgba(0,0,0,0.7)]" to="/">Home</Link>
                    </li>
                   <li className="text-lg ">
                    <Link className="flex items-center text-[rgba(0,0,0,0.7)]" to="/about"><BiSolidOffer className="text-md text-[#ef4444] mx-1"/> Offers</Link>
                    </li>
                   <li className="text-lg">
                    <Link className="flex items-center text-[rgba(0,0,0,0.7)]" to="/contact"> Help</Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center">
            <div className="text-lg">
               <div className="px-4 font-bold text-xl">
                <Link className="flex" to="/cart">
                    <SiCarto className=" text-7xl "/>
                    <p className="text-lg bg-[#ef4444] text-white px-1 rounded-full h-6">{cartItems.length}</p>
                </Link>
               </div>
            </div>
                
                    <button className="text-lg flex items-center text-[rgba(0,0,0,0.7)] "
                    onClick={()=>{
                     btnNameReact === "Sign In" ?
                     setBtnNameReact("Sign Out")
                     : setBtnNameReact("Sign In")
                    }}>
                     {btnNameReact}
                    </button>
                 </div>
     </nav>
    )
}
export default Header;