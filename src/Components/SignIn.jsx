import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router-dom";
import GoogleButton from 'react-google-button'

const SignIn = () => {
    return(
        <div className="text-center mt-10 mb-[4rem] p-4">
    <h2 className="text-2xl font-bold ml-4 leading-loose" >Sign In To Your Account 🚀</h2>
    <p className="my-3 mr-2 text-lg leading-loose">Have Already Account? 
        <Link className="text-blue-500 underline" to="/signin"> Sign In</Link>
    </p>
    <div className="my-6 flex justify-center">
    <GoogleButton/>
    </div>
    <p className="text-lg leading-loose">Continue without Sign In?
        <Link to="/" className="text-blue-500 underline"> Explore</Link>
    </p>
 </div>
 
    )
}
export default SignIn;