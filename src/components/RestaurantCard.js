// Below Used named Import for named Export;

import { useContext } from "react";
import { CDN_URL } from "../utils/constants"; 
import UserContext from "../utils/UserContext";
//import restList from "../utils/mockData";

const RestaurantCard=(props)=>{

    const { resData } = props;
    const {cloudinaryImageId, name, cuisines,avgRating, costForTwo}= resData?.info;
    const {slaString}=resData?.info.sla;

    //Context used below
    
    const {loggedInUser}=useContext(UserContext);
    
    return(
       <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200" >
          <img alt="res-logo"
           className="rounded-lg"
            src={CDN_URL+cloudinaryImageId}
            />
          <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h4> {cuisines.join(", ")}</h4>
          <h4>{avgRating}stars</h4>
          <h4>{costForTwo}</h4>
          <h4>{slaString}</h4>
          <h4>User:{loggedInUser}</h4>
       </div>
    )
 }

 //Higher order component.
 //input-RestaurantCard=>RestaurantCardPromoted
//here below withPromotedLabel is a higher order component.

 /**export const withPromotedLabel =(RestaurantCard)=>{
return (props)=>{
   return (
      <div>
         <label>Open</label>
         <RestaurantCard {...props}/>
      </div>
   );
      
};

 };**/

 // Below used default export;
 
 export default RestaurantCard;