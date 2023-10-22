import { SWIGGY_API } from "./constant"
import { useState, useEffect } from "react"

const useCarouselCard = (carouselId) =>{
     const[carouselImg, setCarouselImg] = useState(null)

      useEffect(()=>{
         fetchImages()
    },[])

    const fetchImages = async() =>{
        const data = await fetch( SWIGGY_API + carouselId)
        const json = await data.json()
        setCarouselImg(json.data)
    }
    return carouselImg

}
export default useCarouselCard