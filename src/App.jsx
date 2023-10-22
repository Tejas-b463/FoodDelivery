import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header"
import Body from "./Components/Body"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Error from "./Components/Error"
import Shimmer from "./Components/Shimmer"
import RestaurantMenu from "./Components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import {Provider} from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./Components/Cart"
import Footer from "./Components/Footer"
const About = lazy(() => import("./Components/About"))
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Provider } from "react-redux"
import Body from "./Components/Body"
import SignIn from "./Components/SignIn"



const App = () =>{
    return(
        <Provider store={appStore}>
        <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
     </div>
     </Provider>
    )
}
export default App

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
            },
            {
                path:"/signin",
                element:<SignIn/>
            },
            {
               path:"/cart",
               element:<Cart/>
            }
    
        ],
        errorElement:<Error/>
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)