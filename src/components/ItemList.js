import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";


const ItemList=({items})=>{

    //useDispatch is a hook given by react-redux

    const dispatch = useDispatch();

    const handleAdItem =(item)=>{

        dispatch(addItems(item));
};
    
    return (
        <div>
             {items.map((item)=> (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price / 100 ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs ">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">

                        <div className="absolute">
                            <button className= "bg-black shadow-lg text-white p-1 rounded-lg"
                            onClick={()=>handleAdItem(item)}
                            >
                                Add +
                                </button>
                        </div>

                     <img className="w-full" src={CDN_URL + item.card.info.imageId} />
                        
                    </div>
                </div>
            
            
                ))}
            
        </div>

        
    );
};

export default ItemList;