import { useState } from "react";
import { Link } from "react-router-dom";




const Header = () =>{
    const[btnNameReact, setBtnNameReact] = useState("Sign In")

    return(
       <nav className="flex justify-between px-10 py-5">
       <div>
       <h1 className="text-3xl font-bold">
        <Link to="/">InstantEats</Link>
       </h1>
       </div>
       <div className="flex justify-between">
           <ul className="flex gap-x-10">
               <li className="font-medium text-xl">
                <Link to="/">Home</Link>
                </li>
               <li className="font-medium text-xl">
                <Link to="/about">About</Link>
                </li>
               <li className="font-medium text-xl">
                <Link to="/contact">Contact</Link>
                </li>
            </ul>
            </div>
            <div className="font-medium">
               <button className="text-xl "
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