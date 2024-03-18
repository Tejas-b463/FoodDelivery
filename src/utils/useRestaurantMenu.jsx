import { useEffect, useState } from "react";
// import { MENU_API } from "./constant"

const useRetaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json);

    setResMenu(json.data);
  };
  return resMenu;
};
export default useRetaurantMenu;
