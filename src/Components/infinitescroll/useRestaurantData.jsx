
import  { useEffect, useState } from 'react'
import {Resturant_Data_URL} from './constants'
import {  DATA_RES } from './mocks'

const useRestaurantData = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
      getRestaurants()
      window.scrollTo(0, 0)
    }, [])
  
    async function getRestaurants() {
      const data = await fetch(Resturant_Data_URL)
      const json = await data.json()
      if(window.innerWidth<1024) {
        setlistOfRestaurant(DATA_RES?.restaurants)
        setFilteredRestaurants(DATA_RES?.restaurants)
      }
      else{
      setlistOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }
    }
    return {listOfRestaurant, filteredRestaurants, setFilteredRestaurants, setlistOfRestaurant}
}
export default useRestaurantData