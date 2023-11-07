import React from "react";
import ReactDOM from "react-dom/client";
/**
 * header
 * -Logo
 * -Menu Bar or navigation 
 * Body
 * -Search
 * -RestaurantContainer
 *  -RestaurantCard
 *     -Image
 *     -Name of res,star rating,cuisine,delivery time
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */
const Header=()=>{
   return(
      <div className="header">
         <div className="logo-container">
            <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About us</li>
               <li>Contact us</li>
               <li>Cart</li>
            </ul>

         </div>
      </div>
   )
};


const RestaurantCard=()=>{
   return(
      <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
         <img alt="res-logo"
          className="res-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e0vvulfbahjxjz6k4uwi"></img>
         <h3> Meghana Food</h3>
         <h4> Biryani, North Indian,Asian</h4>
         <h4>4.4 stars</h4>
         <h4>38 minutes</h4>
      </div>
   )
}

const Body=()=>{
   return(
      <div className="body">
         <div className="Search"> Search</div>
         <div className="res-container">
            <RestaurantCard 
            resName="Meghana Food" 
            cuisine="Biryani, North Indian,Asian"
            />
            <RestaurantCard 
            resName="KFC"
            cuisine="Burger, Fast food"
            />

         </div>

      </div>
   )
}
const AppLayout=()=>{
   return(
      <div className="App">
         <Header/>
         <Body/>
         

      </div>
   )
}



 const root=ReactDOM.createRoot(document.getElementById("root"));

   root.render(<AppLayout/>);





   //* more detailed code 

   import React from "react";
import ReactDOM from "react-dom/client";
/**
 * header
 * -Logo
 * -Menu Bar or navigation 
 * Body
 * -Search
 * -RestaurantContainer
 *  -RestaurantCard
 *     -Image
 *     -Name of res,star rating,cuisine,delivery time
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */
const Header=()=>{
   return(
      <div className="header">
         <div className="logo-container">
            <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"

/>
         </div>   
         
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About us</li>
               <li>Contact us</li>
               <li>Cart</li>
            </ul>

         </div>
      </div>
   )
};

const restList = [
   {
      "type": "restaurant",
      "data": {
         "type": "F",
         "id": "667962",
         "name": "Paris Panini - Gourmet Sandwiches & Wraps",
         "uuid": "f259a8ff-15e1-4584-a714-4ec867531d87",
         "city": "1",
         "area": "Central Bangalore",
         "totalRatingsString": "500+ ratings",
         "cloudinaryImageId": "33101e2fff3a071cbd8b85e73c0d4f45",
         "cuisines": [
            "Continental",
            "Pastas",
            "Salads",
            "Snacks",
            "Desserts",
            "Fast Food",
            "French"
         ],
         "tags": [],
         "costForTwo": 50000,
         "costForTwoString": "₹500 FOR TWO",
         "deliveryTime": 28,
         "minDeliveryTime": 28,
         "maxDeliveryTime": 28,
         "slaString": "28 MINS",
         "lastMileTravel": 1.7000000476837158,
         "slugs": {
            "restaurant": "paris-panini-–-gourmet-sandwiches-central-bangalore-central-bangalore",
            "city": "bangalore"
         },
         "cityState": "1",
         "address": "NO 20, CHURCH STREET, BANGALORE,560001",
         "locality": "Church Street",
         "parentId": 21019,
         "unserviceable": false,
         "veg": false,
         "select": false,
         "favorite": false,
         "tradeCampaignHeaders": [],
         "ribbon": [
            {
                  "type": "PROMOTED"
            }
         ],
         "chain": [],
         "feeDetails": {
            "fees": [
                  {
                     "name": "distance",
                     "fee": 2800,
                     "message": ""
                  },
                  {
                     "name": "time",
                     "fee": 0,
                     "message": ""
                  },
                  {
                     "name": "special",
                     "fee": 0,
                     "message": ""
                  }
            ],
            "totalFees": 2800,
            "message": "",
            "title": "Delivery Charge",
            "amount": "2800",
            "icon": ""
         },
         "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
         },
         "longDistanceEnabled": 0,
         "rainMode": "NONE",
         "thirdPartyAddress": false,
         "thirdPartyVendor": "",
         "adTrackingID": "cid=7409795~p=1~eid=00000189-5895-d1a3-0be9-910c00bc0158~srvts=1689408360867",
         "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
         },
         "lastMileTravelString": "1.7 kms",
         "hasSurge": false,
         "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹100",
            "discountTag": "",
            "headerTypeV2": 0
         },
         "sla": {
            "restaurantId": "667962",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "lastMileTravel": 1.7000000476837158,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
         },
         "promoted": true,
         "avgRating": "4.5",
         "totalRatings": 500,
         "new": false
      },
      "subtype": "basic"
   },
   {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "3241",
          "name": "Meghana Foods",
          "uuid": "93695df0-56e1-417e-b9a8-32084ebaadaf",
          "city": "1",
          "area": "Ashok Nagar",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
          "cuisines": [
              "Biryani",
              "Andhra",
              "South Indian",
              "North Indian",
              "Chinese",
              "Seafood"
          ],
          "tags": [],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "slaString": "25 MINS",
          "lastMileTravel": 2.4000000953674316,
          "slugs": {
              "restaurant": "meghana-foods-central-bangalore",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
          "locality": "Residency Road",
          "parentId": 635,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "chain": [],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 2800,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 2800,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2800",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
          },
          "lastMileTravelString": "2.4 kms",
          "hasSurge": false,
          "sla": {
              "restaurantId": "3241",
              "deliveryTime": 25,
              "minDeliveryTime": 25,
              "maxDeliveryTime": 25,
              "lastMileTravel": 2.4000000953674316,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.5",
          "totalRatings": 10000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "15905",
          "name": "Anand Sweets & Savouries",
          "uuid": "523cb64c-7481-4387-abec-5d814dfc3a45",
          "city": "1",
          "area": "Shivajinagar",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "me4mzdjxosmk0lg4ndog",
          "cuisines": [
              "Sweets",
              "Chaat",
              "Snacks",
              "Desserts",
              "North Indian"
          ],
          "tags": [],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 40,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 40,
          "slaString": "40 MINS",
          "lastMileTravel": 3,
          "slugs": {
              "restaurant": "anand-sweets-and-savouries-commercial-street-central-bangalore",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "#8, Commercial Street, Banaglore - 08",
          "locality": "Commercial Street",
          "parentId": 53,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "ribbon": [
              {
                  "type": "PROMOTED"
              }
          ],
          "chain": [],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 3800,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 3800,
              "message": "",
              "title": "Delivery Charge",
              "amount": "3800",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7485014~p=4~eid=00000189-5895-d1a3-0be9-910d00bc0456~srvts=1689408360867",
          "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
          },
          "lastMileTravelString": "3 kms",
          "hasSurge": false,
          "sla": {
              "restaurantId": "15905",
              "deliveryTime": 40,
              "minDeliveryTime": 40,
              "maxDeliveryTime": 40,
              "lastMileTravel": 3,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.6",
          "totalRatings": 10000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "121603",
          "name": "Kannur Food Point",
          "uuid": "51983905-e698-4e31-b0d7-e376eca56320",
          "city": "1",
          "area": "Tavarekere",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
          "cuisines": [
              "Kerala",
              "Chinese"
          ],
          "tags": [],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "slaString": "33 MINS",
          "lastMileTravel": 6.699999809265137,
          "slugs": {
              "restaurant": "kannur-food-point-btm",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
          "locality": "SG Palya",
          "parentId": 20974,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "chain": [],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 6100,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 6100,
              "message": "",
              "title": "Delivery Charge",
              "amount": "6100",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
          },
          "lastMileTravelString": "6.6 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "121603",
              "deliveryTime": 33,
              "minDeliveryTime": 33,
              "maxDeliveryTime": 33,
              "lastMileTravel": 6.699999809265137,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "IT_IS_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 10000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "210945",
          "name": "Royal Restaurant",
          "uuid": "9b33bca4-65e6-4a26-af3e-f47c4476ed4d",
          "city": "1",
          "area": "Shivajinagar",
          "totalRatingsString": "5000+ ratings",
          "cloudinaryImageId": "yicweopn4lzcjlqy4jvq",
          "cuisines": [
              "Chinese",
              "North Indian",
              "Tandoor"
          ],
          "tags": [],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 35,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 35,
          "slaString": "35 MINS",
          "lastMileTravel": 3,
          "slugs": {
              "restaurant": "royal-restaurant-central-bangalore-central-bangalore",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "Broadway Road Police Station, HKP Road, Sulthangunta, Shivajinagar, Bengaluru, Bangalore Urban, Karnataka, India",
          "locality": "Sulthangunta",
          "parentId": 2896,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "chain": [],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 3800,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 3800,
              "message": "",
              "title": "Delivery Charge",
              "amount": "3800",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
          },
          "lastMileTravelString": "3 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "35% OFF",
              "subHeader": "",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "210945",
              "deliveryTime": 35,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 35,
              "lastMileTravel": 3,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 5000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "30531",
          "name": "Hotel Empire",
          "uuid": "fdf6686f-6f39-4a90-8eb0-6dc7abf82643",
          "city": "1",
          "area": "Brigade Road",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
          "cuisines": [
              "North Indian",
              "Kebabs",
              "Biryani"
          ],
          "tags": [],
          "costForTwo": 45000,
          "costForTwoString": "₹450 FOR TWO",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "slaString": "32 MINS",
          "lastMileTravel": 2.0999999046325684,
          "slugs": {
              "restaurant": "empire-restaurant-central-bangalore-central-bangalore",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "Empire SuitesNo.35, Castle Street, Off Brigade Road,Bengaluru, Karnataka 560025",
          "locality": "Brigade Road",
          "parentId": 475,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "chain": [],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 2800,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 2800,
              "message": "",
              "title": "Delivery Charge",
              "amount": "2800",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
          },
          "lastMileTravelString": "2 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "₹150 OFF",
              "subHeader": "ABOVE ₹349",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "30531",
              "deliveryTime": 32,
              "minDeliveryTime": 32,
              "maxDeliveryTime": 32,
              "lastMileTravel": 2.0999999046325684,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.3",
          "totalRatings": 10000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "689528",
          "name": "Shyamji's Chole Bhature",
          "uuid": "0ef63dab-40ff-4af7-862b-833b486690c9",
          "city": "1",
          "area": "Malleshwaram",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "573ce264ceb9c76d27aaa0b7cb1e36c8",
          "cuisines": [
              "Street Food",
              "Chaat"
          ],
          "tags": [],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "slaString": "36 MINS",
          "lastMileTravel": 5.900000095367432,
          "slugs": {
              "restaurant": "shyamji's-chole-bhature-malleshwaram-malleshwaram",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "21/1,ground floor 10th cross , sampige road, Malleswaram Bangalore Karnataka 560003",
          "locality": "Sampige Road",
          "parentId": 255424,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "ribbon": [
              {
                  "type": "PROMOTED"
              }
          ],
          "chain": [],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 5300,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 5300,
              "message": "",
              "title": "Delivery Charge",
              "amount": "5300",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7477604~p=10~eid=00000189-5895-d1a3-0be9-910f00bc0a7f~srvts=1689408360867",
          "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
          },
          "lastMileTravelString": "5.9 kms",
          "hasSurge": false,
          "sla": {
              "restaurantId": "689528",
              "deliveryTime": 36,
              "minDeliveryTime": 36,
              "maxDeliveryTime": 36,
              "lastMileTravel": 5.900000095367432,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.1",
          "totalRatings": 100,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "65797",
          "name": "Leon's - Burgers & Wings (Leon Grill)",
          "uuid": "2ecdca25-3954-4f2e-8d50-4e13e2faf73e",
          "city": "1",
          "area": "Koramangala",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "r4ufflqojich0r29efvc",
          "cuisines": [
              "American",
              "Snacks",
              "Turkish",
              "Portuguese",
              "Continental"
          ],
          "tags": [],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 35,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 35,
          "slaString": "35 MINS",
          "lastMileTravel": 6,
          "slugs": {
              "restaurant": "leon-grill-koramangala-koramangala",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "Plot No.123 K.H.B Colony, 5th Block , Koramangala , Bangalore -95",
          "locality": "Koramangala",
          "parentId": 371281,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "ribbon": [
              {
                  "type": "PROMOTED"
              }
          ],
          "chain": [],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 6100,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 6100,
              "message": "",
              "title": "Delivery Charge",
              "amount": "6100",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7483846~p=13~eid=00000189-5895-d1a3-0be9-911000bc0d06~srvts=1689408360867",
          "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
          },
          "lastMileTravelString": "6 kms",
          "hasSurge": false,
          "sla": {
              "restaurantId": "65797",
              "deliveryTime": 35,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 35,
              "lastMileTravel": 6,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.3",
          "totalRatings": 10000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "620897",
          "name": "Narmada Chain Of Restaurant",
          "uuid": "232f5ac0-f521-4d6e-b692-75a5c7784465",
          "city": "1",
          "area": "Frazer Town",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "nus1zkije83esoyk91o6",
          "cuisines": [
              "Biryani",
              "Andhra",
              "South Indian"
          ],
          "tags": [],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "slaString": "36 MINS",
          "lastMileTravel": 5,
          "slugs": {
              "restaurant": "narmada-chain-of-restaurant-frazer-town-frazer-town",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "No.74, Naseer Pride, Ground & 1st Floor, Madhavraya Mudaliar Raod, Frazer Town, Bengaluru BBMP East-560005",
          "locality": "Madhavraya Mudaliar Raod",
          "parentId": 322826,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "chain": [],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 5300,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 5300,
              "message": "",
              "title": "Delivery Charge",
              "amount": "5300",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
          },
          "lastMileTravelString": "5 kms",
          "hasSurge": false,
          "sla": {
              "restaurantId": "620897",
              "deliveryTime": 36,
              "minDeliveryTime": 36,
              "maxDeliveryTime": 36,
              "lastMileTravel": 5,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.4",
          "totalRatings": 1000,
          "new": false
      },
      "subtype": "basic"
  },
  {
      "type": "restaurant",
      "data": {
          "type": "F",
          "id": "16073",
          "name": "California Burrito",
          "uuid": "740156d4-f601-4d20-be03-c6344f1c3d5e",
          "city": "1",
          "area": "Malleshwaram",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "27238ee4292d42c7b705f2ce8671ff80",
          "cuisines": [
              "Mexican",
              "American",
              "Salads",
              "Continental",
              "Keto",
              "Healthy Food"
          ],
          "tags": [],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 57,
          "minDeliveryTime": 57,
          "maxDeliveryTime": 57,
          "slaString": "57 MINS",
          "lastMileTravel": 5,
          "slugs": {
              "restaurant": "california-burrito-malleshwaram-malleshwaram",
              "city": "bangalore"
          },
          "cityState": "1",
          "address": "3rd Floor, Mantri Square Mall, Malleshwaram, Bangalore - 560003",
          "locality": "Malleshwaram",
          "parentId": 1252,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "ribbon": [
              {
                  "type": "PROMOTED"
              }
          ],
          "chain": [],
          "feeDetails": {
              "fees": [
                  {
                      "name": "distance",
                      "fee": 5300,
                      "message": ""
                  },
                  {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                  },
                  {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                  }
              ],
              "totalFees": 5300,
              "message": "",
              "title": "Delivery Charge",
              "amount": "5300",
              "icon": ""
          },
          "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=7300360~p=16~eid=00000189-5895-d1a3-0be9-911100bc101a~srvts=1689408360867",
          "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
          },
          "lastMileTravelString": "5 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50",
              "discountTag": "",
              "headerTypeV2": 0
          },
          "sla": {
              "restaurantId": "16073",
              "deliveryTime": 57,
              "minDeliveryTime": 57,
              "maxDeliveryTime": 57,
              "lastMileTravel": 5,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.6",
          "totalRatings": 10000,
          "new": false
      },
      "subtype": "basic"
  }
]

   



const RestaurantCard=(props)=>{

   console.log(props);
   const { resData } = props;
   return(
      <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
         <img alt="res-logo"
          className="res-logo"
           src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
           resData.data.cloudinaryImageId
           }
           />
         <h3>{resData.data.name}</h3>
         <h4> {resData.data.cuisines.join(", ")}</h4>
         <h4>{resData.data.avgRating}stars</h4>
         <h4>{resData.data.costForTwo}</h4>
         <h4>{resData.data.deliveryTime}minutes</h4>
      </div>
   )
}

const Body=()=>{
   return(
      <div className="body">
         <div className="Search"> Search</div>
         <div className="res-container">
            <RestaurantCard 
            resData={restList[0]}
            />
            <RestaurantCard 
            resData={restList[1]}
            />
            <RestaurantCard 
            resData={restList[2]}
            />
            <RestaurantCard 
            resData={restList[3]}
            />
            <RestaurantCard 
            resData={restList[4]}
            />
            <RestaurantCard 
            resData={restList[5]}
            />
            <RestaurantCard 
            resData={restList[6]}
            />
            <RestaurantCard 
            resData={restList[7]}
            />
            <RestaurantCard 
            resData={restList[8]}
            />
         </div>

      </div>
   )
}
const AppLayout=()=>{
   return(
      <div className="App">
         <Header/>
         <Body/>
         

      </div>
   )
}



 const root=ReactDOM.createRoot(document.getElementById("root"));

   root.render(<AppLayout/>);



   /** In Body we are using useSate to do the dynamic program that is on click we 
    * will get restaurants above rating 4.
    * */
   //  Below Used Default Import for default Export;

import RestaurantCard from "./RestaurantCard";

// Below Used named Import for named Export;

import restList from "../utils/mockData";

import { useState } from "react";

const Body=()=>{

   // let NewRestList = restList;

    //local State Variable
    const [filteredRestList, setFilteredRestList] = useState(restList);
    
    return(
       <div className="body">
           <div className="filter">  
          <button className="filter-btn" 
          onClick={() => {
            const newRestList = restList.filter(rest =>
                rest.data.avgRating > 4.5);
                console.log(restList);
                setFilteredRestList(newRestList); 
                
            }}
            >
            Top Rated Restaurants
         </button>
      </div>
          <div className="res-container">
             {
                filteredRestList.map((restaurant) => (
                <RestaurantCard key={restaurant.data.id}resData={restaurant}/>
            )) }
          </div>
 
       </div>
    )
 }

 // Below used default export;

 export default Body;
   








 //  Below Used Default Import for default Export;

import RestaurantCard from "./RestaurantCard";

// Below Used named Import for named Export;

//import restList from "../utils/mockData";

import { useState, useEffect } from "react";

const Body=()=>{

   // let NewRestList = restList;

    //local State Variable
    const [filteredRestList, setFilteredRestList] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);


    const fetchData = async() => {
        //we are using Promise and here we are using async and await instead of .then
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json= await data.json();

        console.log(json);

        setFilteredRestList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(filteredRestList);

        
        
    };

     return(
       <div className="body">
           <div className="filter">  
          <button className="filter-btn" 
          onClick={() => {
            const newRestList = restList.filter(rest =>
                rest.data.avgRating > 4);
                console.log(restList);
                setFilteredRestList(newRestList); 

            }}
            >
            Top Rated Restaurants
         </button>
      </div>
          <div className="res-container">
             {
                filteredRestList.map((restaurant) => (
                <RestaurantCard key={ restaurant.data.id } resData={ restaurant }/>
            )) }
          </div>
 
       </div>
    ) }

 // Below used default export;

 export default Body;