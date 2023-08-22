import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex})=>{

    const handleClick=()=>{
        setShowIndex();
        console.log(setShowIndex);

        
    };

    /* VERY IMPORTANT  :::***:::
    
    if I use below logic RestaurantCategory will have it's own control 
    to show Items or hide
    and if we take away this power then it is uncontrolled component.
    it relies on it's Parent component
    but if I use props from RestaurantMenu for showItems it means
     RestaurantMenu(Parent) is a controlling Component(controlled component).
    
    const[showItems, setShowItems]=useState(false);

    const handleClick=()=>{
        console.log(showItems);
        setShowItems(!showItems);

        Below line will be in Header 
        <div className="w-8/12 p-4 mx-auto my-4 bg-gray-50 shadow-lg "onClick={handleClick}>
        */

    return(
        <div>
            {/*Header*/}
        <div className="w-8/12 p-4 mx-auto my-4 bg-gray-50 shadow-lg " >
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>    
            <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
            
        </div>
            {/* Accordion Body*/}
            
        </div>
    );
};

export default RestaurantCategory;