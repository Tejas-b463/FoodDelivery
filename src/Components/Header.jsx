import { useState } from "react";
import { Link } from "react-router-dom";
import {BiSolidOffer} from "react-icons/bi"
import { LOGO_URL } from "../utils/constant";
import { useSelector } from "react-redux";
import {MdFastfood} from "react-icons/md"






const Header = () =>{
    
   

    // const[btnNameReact, setBtnNameReact] = useState("Sign In")

    // Subscribing to the store using a selector
    const cartItems = useSelector((store)=>store.cart.items);
    // console.log(cartItems)

    return(
    <nav className="flex justify-between items-center px-10 py-6 shadow-lg">
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
                    <Link className="flex items-center" to="/">Home</Link>
                    </li>
                   <li className="text-lg ">
                    <Link className="flex items-center " to="/about"><BiSolidOffer className="text-md text-[#ef4444] mx-1"/> Offers</Link>
                    </li>
                   <li className="text-lg">
                    <Link className="flex items-center " to="/contact"> Help</Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center">
            <div className="text-lg">
               <div className="px-4 font-bold text-xl">
                <Link className="flex" to="/cart">
                    <MdFastfood className=" text-3xl my-2 text-[rgba(0,0,0,0.9)]"/>
                    <p className="text-sm bg-[#ef4444] text-white px-2  rounded-full h-6">{cartItems.length}</p>
                </Link>
               </div>
            </div>
            
           
                
                    {/* <button className="text-lg flex items-center text-[rgba(0,0,0,0.7)] "
                    onClick={()=>{
                     btnNameReact === "Sign In" ?
                     setBtnNameReact("Sign Out")
                     : setBtnNameReact("Sign In")
                    }}>
                     {btnNameReact}
                    </button> */}
                 </div>
     </nav>
    )
}
export default Header;