import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    const[btnNameReact, setBtnNameReact] = useState("Sign In")
    return(
       <div className="header">
       <div className="logo">
          <h1>Food</h1>
       </div>
       <div className="links">
           <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
               <button className="btn-login"
               onClick={()=>{
                btnNameReact === "Sign In" ?
                setBtnNameReact("Sign Out")
                : setBtnNameReact("Sign In")
               }}>
                {btnNameReact}
               </button>
           </ul>
       </div>
     </div>
    )
}
export default Header;