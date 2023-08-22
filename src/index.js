import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import AboutClass from "./components/AboutClass";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import './index.css'
//import Grocery from "./components/Grocery";

/**"Chunking" or we can say "Code Splitting" or "dynamic bundling" or "lazy loading" 
or "on-demand loading". or "dynamic bundling"
All the above names are for same thing that is to break down our app into smaller chunks.
below we have used "lazy loading" i.e lazy() function for importing Grocery
lazy() function comes from react library I have imported named import.
below "import()"" is a function which takes callback function.
**/


const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout=()=>{

    const[userName, setUserName]=useState();

    //authentication

    useEffect(()=>{

        //make an API call and send username and password.

        const data={
            name:"Snehal Birajdar",
        };
        setUserName(data.name);
    },[]);
   return(

    /**IMPORTANT::::***::::
      
     * below code is for providing new value to context 
     * or Overriding new value over default value of context
    I have wrapped all the component in the <UserContext.Provider> 
    if I wrap only <Header/> component in the <UserContext.Provider> 
    then only in <Header/> component new value will be taken other that that 
    it will be default value for <outlet />
    
    <UserContext.Provider value={({loggedInUser: "Sakshi"})}>
    <header/>
    </UserContext.Provider>
    <UserContext.Provider value={({loggedInUser: userName})}>
    <Outlet/>
    </UserContext.Provider>

    this will also correct way and it will give output as Sakshi in <Header/>
    and <Outlet/> will use Snehal Birajdar in it
    **/
    <Provider store={appStore}>
    <UserContext.Provider value={({loggedInUser: userName})}>

        <div className="App">
            <Header/>
            <Outlet />
         </div>
    </UserContext.Provider>
    </Provider>
      
   );
};

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[{
            path:"/",
            element:<Body />
        },
/**about component is functional component.
        {
            path:"/about",
            element:<About />,
            
        },
    AboutClass component is class based component.            
            {
            path:"/aboutclass",
            element:<AboutClass />,
            
        },
        **/

        // here we will use "AboutClass.js" only so 
        //in the "/about" path I have given "<AboutClass />"
        {
            path:"/about",
            element:<AboutClass />,
            
        },

        {
            path:"/contact",
            element:<Contact />,
           
        },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu />,
        },
        {
            path:"/cart",
            element:<Cart />,
           
        },

        {
            /**
             * Here we have used Suspense because Grocery code will be loaded on demand
             * and it will take some time to load or to come to the browser
             * But React is very fast while react tries to load Grocery code 
             * the code was not there so that is why react suspends the rendering
             * that middle state where Grocery takes few seconds to fetch the data of 
             * Grocery that middle state where react tries to render Grocery and Grocery
             * and it is not there that causes the error
             * to handle that state we use "Suspense". Suspense is component that comes from 
             * react library. so we need to wrap our component into the Suspense as below shown.
             * and give it a placeholder or fallback to tell what should react render when the 
             * code is not there king of loading screen 
             */

            
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>,
           
        },

        ],

        errorElement:<Error />,
    },
    
])

 const root=ReactDOM.createRoot(document.getElementById("root"));

   root.render(<RouterProvider router={appRouter}/>);