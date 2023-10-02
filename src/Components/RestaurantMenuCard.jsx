import { MENU_IMG } from "../utils/constant";
const RestaurantMenuCard = (props) =>{

    const{resMenu} = props;

    const{name,price,imageId} = resMenu?.card?.info;
    

    return(
        <div className="menu-card-container"> 
            <div className="left">
        <h4>{name}</h4>
        <p>₹ {price/100}</p>
        </div>
        <div className="right">
        <img src={MENU_IMG + imageId } alt="" />
        </div>
       
      </div>
    )
}
export default RestaurantMenuCard;