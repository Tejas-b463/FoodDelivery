import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header"
import Body from "./Components/Body"
// import About from "./Components/About"
import Contact from "./Components/Contact";
import Error from "./Components/Error"
import RestaurantMenu from "./Components/RestaurantMenu";

const About = lazy(() => import("./Components/About"));


import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./Components/Shimmer";



const App = () =>{

    return(
        <div className="app">
        <Header/>
        <Outlet/>
     </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
               path:"/",
               element:<Body/>,
            },
            {
                path:"/about",
                element:(
                     <Suspense fallback={<Shimmer/>}>
                     <About/>
                      </Suspense>
                      )
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
    
        ],
        errorElement:<Error/>
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);