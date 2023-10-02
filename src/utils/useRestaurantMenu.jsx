
import { useEffect, useState } from "react";
import {MENU_URL}  from "../utils/constant"


const useRetaurantMenu = (resId) => {

    const[resMenu, setResMenu] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])
  
    const fetchMenu = async () =>{
      const data = await fetch(MENU_URL+resId)
  
      const json = await data.json();
  
      console.log(json);
      setResMenu(json.data);
    }
    return resMenu;

}
export default useRetaurantMenu;