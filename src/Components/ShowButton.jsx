import { Link } from "react-router-dom"

const ShowButton = () => {
return(
<Link to="/about" >
   <div className="border text-center border-gray-300 py-2 rounded-lg">
     <button className="text-lg text-gray-700">Show more</button>
   </div>
   </Link>
)
}
export default ShowButton