import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError()
    return(
        <>
        <div className="error">
       <h2> OOPS❗❗</h2>
       <h4>Something Went Wrong 🥺</h4>
       <h3>{err.status}:{err.statusText}</h3>
       </div>
       </>
    )
}
export default Error;