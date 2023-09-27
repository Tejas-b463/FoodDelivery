import { useState } from "react";

const Header = () =>{
    const[btnNameReact, setBtnNameReact] = useState("Sign In")
    return(
       <div className="header">
       <div className="logo">
          <h1>Food</h1>
       </div>
       <div className="links">
           <ul>
               <li><a href="">Home</a></li>
               <li><a href="">About</a></li>
               <li><a href="">Contact</a></li>
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