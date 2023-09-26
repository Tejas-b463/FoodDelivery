import {CDN_URL} from "../utils/constant"

const RestaurantCard = (props) =>{
    const {resData} = props;

    const {cloudinaryImageId,name,cuisines,avgRating} =resData?.info;
    return (
  <div className="res-container">
        <img className="card-logo" src= {CDN_URL+cloudinaryImageId} alt="rescard-logo" />
      <div className="card-section">
       
           <h4 className="card-name">{name}</h4>
           <p className="card-cuisine">{cuisines.join(", ")}</p>
         
            <h4 className="card-rating">{avgRating} &#9734;</h4>
            <p className="card-price">₹ {resData.info.feeDetails.totalFee / 10} for two</p>
            <span className="card-deliverytime">{resData.info.sla.deliveryTime} min</span>
        </div>
  </div>
    )
}
export default RestaurantCard;