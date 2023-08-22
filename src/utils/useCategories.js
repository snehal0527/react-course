import { useEffect, useState } from "react";
import { Menu_URL,M_API } from "./constants";

const useCategories=(resId)=>{
    const [resCat, setResCategories] = useState([]);
    
    useEffect(()=>{
        fetchData();
     },[]);
    
     const fetchData=async()=>{
        const data=await fetch(Menu_URL + resId + M_API);
        const json=await data.json();

        const categories=json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c.card?.card?.["@type"]==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

        setResCategories(categories)
    };

    return resCat;
}

export default useCategories;