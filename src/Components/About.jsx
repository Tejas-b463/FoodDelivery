

import React, { useEffect, useState } from 'react'
import useRestaurantData from './infinitescroll/useRestaurantData';
import { filterData } from './infinitescroll/helper';
import Shimmer from '../Components/Shimmer';
import { Link } from 'react-router-dom';
import RestaurantCard from './infinitescroll/RestaurantCard';
import ButtonList from "./infinitescroll/ButtonList"

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState(10)
  const { allRestaurants, filteredRestaurants, setFilteredRestaurants, setAllRestaurants } = useRestaurantData();
  // console.log(allRestaurants);

  async function getRestaurantMore() {
    setLoading(true);
    try {
      const response = await fetch(
        'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update',
        {
          method: 'POST', // Use POST for fetching more restaurants
          headers: {
            'Content-Type': 'application/json',
            // Add any additional headers here
          },
          body: JSON.stringify({
            lat: 12.9715987,
            lng: 77.5945627,
            nextOffset: 'COVCELQ4KID4ruup+9+KczCnEzgD', // Use the correct nextOffset value
            // Other payload parameters if needed
            seoParams: {
              apiName: "FoodHomePage",
              pageType: "FOOD_HOMEPAGE",
              seoUrl: "https://www.swiggy.com/",
            },
            widgetOffset: {
              // Include your widgetOffset values here
              NewListingView_Topical_Fullbleed: '',
              NewListingView_category_bar_chicletranking_TwoRows: '',
              NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
              collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: String(page),
            },
          }),
        }
      );
      const data = await response.json();
      //    console.log(data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants);
      if (allRestaurants) {

        let newRestaurants = data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

        setFilteredRestaurants((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
        setAllRestaurants((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
      }
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
         if (page > 10) {
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


    return allRestaurants.length === 0 ? <Shimmer/> :(

      <>
        <div className='my-10 sm:mx-14 md:mx-24 lg:mx-44 '>
          <h1 className='mx-3 my-4 font-black text-3xl '>Restaurants With Great Offers</h1>
          <div>
            {/* <ButtonList /> */}
          </div>
         
          <div className="grid grid-cols-4 gap-14" data-testid='res-list'>
            {/* You have to write logic for NO restraunt fount here */}
            {filteredRestaurants && filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.info.id}
                  key={restaurant.info.id}
                  className='pr-4'
                >
                  <RestaurantCard {...restaurant.info} />
                </Link>
              );
            })}
          </div>
          </div>
  {Loading && <Shimmer/>}
      </>
    );
};

export default Body

