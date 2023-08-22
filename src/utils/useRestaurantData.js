import { useEffect, useState } from "react";
import { Menu_URL,M_API } from "./constants";

const useRestaurantData=(resId)=>{

    
    const [restdata, setRestData] = useState({});

    useEffect(()=>{
        fetchData();
     },[]);

     const fetchData=async()=>{
        const data=await fetch(Menu_URL + resId + M_API);
        const json=await data.json();
        //setResInfo(json.data);
        
        setRestData(json.data?.cards[0]?.card?.card);

     };

    return restdata;
    
}

export default useRestaurantData;