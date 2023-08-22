import { useEffect, useState } from "react";
import { Menu_URL,M_API } from "./constants";

const useRestaurantMenu=(resId)=>{

    const [resInfo, setResInfo] = useState([]);
    // const [restdata, setRestData] = useState({});

    useEffect(()=>{
        fetchData();
     },[]);

     const fetchData=async()=>{
        const data=await fetch(Menu_URL + resId + M_API);
        const json=await data.json();
        setResInfo(json.data);
        setResInfo(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card);
       // setRestData(json.data?.cards[0]?.card?.card);
        //console.log(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    };

    return resInfo;
}

export default useRestaurantMenu;