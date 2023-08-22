//  Below Used Default Import for default Export;

import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";

// Below Used named Import for named Export;

//import restList from "../utils/mockData";
import Shimmer from "./shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{

   // let NewRestList = restList;

    //local State Variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const[filteredRestaurant, setFilteredRestaurant]=useState([]);

    const[searchText, setSearchText]=useState("");

    //const RestaurantCardPromoted= withPromotedLabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    }, []);


    const fetchData = async() => {
        //we are using Promise and here we are using async and await instead of .then
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json= await data.json();

        //Optional chaining used in below line.
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus= useOnlineStatus();

    if(onlineStatus===false) return <h1>Looks like you are offline!!! Please check your Internet Connection.</h1>
    //Most IMPORTANT QUESTION ASKED IN INTERVIEW "What is conditional rendering?? "
    //Below this is called conditional rendering.
    //rendering on the basis of condition is know as conditional rendering.

   /**  if(!listOfRestaurants.length)
    {
        return <Shimmer/>;
    }**/
    

    //Here below we have used turnery operator instead of "If statement"

 return !listOfRestaurants.length?(<Shimmer/>):(
       <div className="body">
           <div className="filter flex">
            <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchText} 
                onChange={
                    (e)=> {
                        setSearchText(e.target.value);
                    }
                }/>

                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                onClick={()=>{
                    //filter the restaurant card and update the UI.
                    //Search text needed
                    console.log(searchText)
                    const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                    console.log(filteredRestaurant);
                    setFilteredRestaurant(filteredRestaurant);
                }}>
                    Search
                </button>
            </div>
            <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={() => {
               const FilteredList = listOfRestaurants.filter((rest) =>
                rest.info.avgRating > 4.2);
                setListOfRestaurants(FilteredList); 

            }}
            >
            Top Rated Restaurants
         </button>
         </div>
      </div>
      <div className="flex flex-wrap">
             {
                filteredRestaurant.map((restaurant) => (
               <Link 
               key={restaurant.info.id}
               to={"/restaurants/" + restaurant.info.id}
               >
                 <RestaurantCard resData={ restaurant }/>
              </Link>
            )) }
          </div>
 
       </div>
    ) }

 // Below used default export;

 export default Body;