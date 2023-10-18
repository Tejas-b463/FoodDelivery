
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button'
import {signInWithPopup} from "firebase/auth"
import {auth,provider} from "../utils/firebase"
import { useState, useEffect } from "react";





const SignIn = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    const signInWithGoogle = async () => {
      try {
        await signInWithPopup(auth,provider);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    };
  
    const signOut = async () => {
      try {
        await auth.signOut();
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        {user ? (
          <div className="mt-10 mb-[4rem] p-4">
            <h1 className="text-center text-2xl font-bold ml-4 leading-loose">Welcome, {user.displayName}</h1>
            <p className="text-center text-gray-500  ml-4 leading-loose">{user.email}</p>
            <div className="flex justify-center my-4">
            <button className="text-lg border border-red-400 px-10 py-1 font-bold text-red-500 hover:bg-red-500 hover:text-white" onClick={signOut}> Sign Out
            </button>
            </div>
          </div>
        ) : (
            <div className="text-center mt-10 mb-[4rem] p-4">
            <h2 className="text-2xl font-bold ml-4 leading-loose" >Sign In To Your Account 🍕</h2>
            <div className="my-6 flex justify-center">
             
          <GoogleButton onClick={signInWithGoogle}/>
              
          </div>
          <p className="text-lg leading-loose">Continue without Sign In?
           <Link to="/" className="text-blue-500 underline"> Explore</Link>
         </p>
          </div>
        )}
      </div>
    );
  };
  

  
  
  
  
  
  
   

   

//     return(
//         <div className="text-center mt-10 mb-[4rem] p-4">
//     <h2 className="text-2xl font-bold ml-4 leading-loose" >Sign In To Your Account 🍕</h2>
//     <p className="my-3 mr-2 text-lg leading-loose">Have Already Account? 
//         <Link className="text-blue-500 underline" to="/signin"> Sign In</Link>
//     </p>
//     <div className="my-6 flex justify-center">
   
//     <GoogleButton onClick={handleButtonClick }/>

//     </div>
//     <p className="text-lg leading-loose">Continue without Sign In?
//         <Link to="/" className="text-blue-500 underline"> Explore</Link>
//     </p>
//  </div>
 
//     )

export default SignIn;