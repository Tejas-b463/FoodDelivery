

import React, { useEffect, useState } from 'react'
import useRestaurantData from './infinitescroll/useRestaurantData';
import { filterData } from './infinitescroll/helper';
import Shimmer from '../Components/Shimmer';
import { Link } from 'react-router-dom';
import RestaurantCard from '../Components/RestaurantCard';


const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(10)
  const { listOfRestaurant, filteredRestaurants, setFilteredRestaurants, setlistOfRestaurant } = useRestaurantData();
  // console.log(listOfRestaurant);

  async function getRestaurantMore() {
    setLoading(true);
    try {
      const response = await fetch(
        'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update',
        {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            lat: 19.0759837,
            lng: 72.8776559,
            nextOffset: 'COVCELQ4KIDg08PFoqi4KjCnEzgC', // Use the correct nextOffset value
            // Other payload parameters if needed
            seoParams: {
              apiName: "FoodHomePage",
              pageType: "FOOD_HOME_PAGE",
              seoUrl: "www.swiggy.com",
            },
            widgetOffset: {
              "NewListingView_Topical_Fullbleed": "",
              "NewListingView_Topical_Version2": "",
              "NewListingView_category_bar_chicletranking_TwoRows": "",
              "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
              "Restaurant_Group_WebView_PB_Theme": "",
              "Restaurant_Group_WebView_SEO_PB_Theme": "",
              "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": String(page),
              "inlineFacetFilter": "",
              "restaurantCountWidget": ""
            },
          }),
        }
      );
      const data = await response.json();
      if (listOfRestaurant) {
        let newRestaurants = data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;
        console.log(newRestaurants);

        setFilteredRestaurants((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
        setlistOfRestaurant((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
      }
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
         if (page > 15) {
        getRestaurantMore();
      }
  }, [page]);


  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 15);
      }
    } catch (error) { }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);


    return listOfRestaurant.length === 0 ? <Shimmer/> :(

      <>
        <div className='my-10 sm:mx-14 md:mx-24 lg:mx-44 '>
          <h1 className='mx-3 my-6 font-black text-3xl '>Restaurants With Great Offers</h1>
          <div className='mb-6 '>
          <button className="font-medium border border-gray-300 px-3 py-2 rounded-full text-gray-700" onClick={()=>{
              const filterList = listOfRestaurant.filter((res)=>
                 res.info.avgRating > 4
              );
              setlistOfRestaurant(filterList);
              setFilteredRestaurants(filterList);
            }
            }>4.0+ Rating</button>
            <button className="mx-2 font-medium border border-gray-300 px-3 py-2 rounded-full text-gray-700" onClick={()=>{
              const filterList = listOfRestaurant.filter((res)=>
                 res.info.veg == true
              );
              setlistOfRestaurant(filterList);
              setFilteredRestaurants(filterList);
            }
            }>Pure Veg</button>

<button className="font-medium border border-gray-300 px-3 py-2 rounded-full text-gray-700" onClick={()=>{
              const filterList = listOfRestaurant.filter((res)=>
                 res.info.sla.deliveryTime < 25
              );
              setlistOfRestaurant(filterList);
              setFilteredRestaurants(filterList);
            }
            }>Fast Delivery</button>
           
          </div>
         
          <div className="grid grid-cols-4 gap-14" data-testid='res-list'>
            {/* You have to write logic for NO restraunt fount here */}
            {  filteredRestaurants?.map((restaurant) => (
         <Link key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}>
            <RestaurantCard resData={ restaurant}/>
            
            </Link>
            ))}
          </div>
          </div>
  {Loading && <Shimmer/>}
      </>
    );
};

export default Body

