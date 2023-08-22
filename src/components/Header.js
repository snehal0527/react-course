
// Used named Import for named Export;

import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{

   const onlineStatus=useOnlineStatus();

    const [btnNameReact, setBtnNameReact]=useState("Login");

   const {loggedInUser} = useContext(UserContext);
   console.log(loggedInUser);

   //selector is hook in react it is from react 
   //here subscribing to store using selector

   const cartItems = useSelector((store) => store.cart.items);

    return(
       <div className="flex justify-between bg-green-100 shadow-lg sm:bg-yellow-200 lg:bg-pink-100">
          <div className="logo-container">
             <img className="w-56" src ={LOGO_URL} />
          </div>   
          
          <div className="flex items-center">
             <ul className="flex p-4 m-4">
               <li className="px-4">
                  Online Status:{onlineStatus? "✅" : "🔴" }
               </li>
                <li className="px-4">
                    <Link to="/">Home</Link>
                    </li>
                <li className="px-4">
                    <Link to="/about">About us</Link>
                </li>
                <li className="px-4">
                    <Link to="/contact">Contact us</Link>
                </li>
                <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-4 font-bold text-lg ">
                <Link to="/cart"> 🛒 ({cartItems.length}-items)</Link></li>

                <button className="login"onClick={()=>{
                 btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
                    }}
                    >
                    {btnNameReact}
                    </button>

                    <li className="px-4 font-bold"> {loggedInUser} </li>
             </ul>
 
          </div>
       </div>
    )
 };

 // Below used default export;

 export default Header;