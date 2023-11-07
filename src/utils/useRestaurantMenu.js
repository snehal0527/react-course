import { useEffect, useState } from "react";
import { Menu_URL,M_API } from "./constants";

const useRestaurantMenu=(resId)=>{

    const [resInfo, setResInfo] = useState([]);
    
    useEffect(()=>{
        fetchData();
     },[]);

     const fetchData=async()=>{
        const data=await fetch(Menu_URL + resId + M_API);
        const json=await data.json();
        setResInfo(json.data);
        setResInfo(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card);
       
    };

    return resInfo;
}

export default useRestaurantMenu;