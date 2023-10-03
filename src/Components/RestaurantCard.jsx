import {CDN_URL} from "../utils/constant"

const RestaurantCard = (props) =>{
    const {resData} = props;

    const {cloudinaryImageId,name,cuisines,avgRating,locality    } =resData?.info;
    return (
  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pb-10">
        <img className="w-96 h-96 object-cover p-2 rounded-t-lg " src= {CDN_URL+cloudinaryImageId} alt="rescard-logo" />
      <div className="px-5 pb-5">
           <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h4>
           <p className="card-cuisine">{cuisines.join(", ")}</p>
           <p>{locality}</p>
           <div className="flex justify-between">
            <h4 className="">{avgRating} &#9734;</h4>
            <p className="card-price">₹ {resData.info.feeDetails.totalFee / 10} for two</p>
            </div>
        </div>
  </div>
    )
}
export default RestaurantCard;