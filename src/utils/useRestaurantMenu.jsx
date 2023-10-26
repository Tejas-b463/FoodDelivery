import { useEffect, useState } from "react";
// import { MENU_API } from "./constant"

const useRetaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setResMenu(json.data);
  };
  return resMenu;
};
export default useRetaurantMenu;
