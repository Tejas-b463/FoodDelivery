import { Link} from "react-router-dom";

const SearchAllRestaurant = () => {
return(
    <div className="">
    <img className="w-28 ml-36" src="https://www.grubhub.com/img-hashed/utensils-2f0312a14f568f8c9bc190458ea62548.png" alt="" />
    <h1 className="py-2">We didn't find any results Remove filters or start over</h1>
    <Link to="/about">
  <h1 className="ml-20 font-bold text-xl text-[rgba(0,0,0,0.6)]">Search all results for Restaurant</h1>
  </Link>
  </div>
)
}
export default SearchAllRestaurant;