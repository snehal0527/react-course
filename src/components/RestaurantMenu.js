import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
//import { Menu_URL , M_API} from "../utils/constants";
import useRestaurantMenu,{categories} from "../utils/useRestaurantMenu";
import useRestaurantData from "../utils/useRestaurantData";
import useCategories from "../utils/useCategories";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

  // const Categories1=categories;
  //const [resInfo, setResInfo] = useState([]);

  //const [resMenu, setResMenu] = useState({});
 
  //const [restdata, setRestData] = useState({});

  /** const params = useParams(); below instead of params I used resId. 
   * useParam() is a hook comes from react-router-dom
   * here we used resId in URL so resId is given even if params is given 
   * as shown above it will give us Id
   * here we need dynamic Id's so resId is used to take
   **/


  const {resId} = useParams();
  //console.log(resId);

  //below custom hook is used. custom hooks are created by us.

  const resMenu = useRestaurantMenu(resId);

  const restdata =useRestaurantData(resId);

  const resCat = useCategories(resId);

  const [count, setCount]=useState(0);

  const[showIndex, setShowIndex]=useState(null);
  /**useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(Menu_URL + resId + M_API);
      const json = await data.json();
      setResMenu(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card);
      setRestData(json.data?.cards[0]?.card?.card);
      console.log(json);

    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error or set a default value for resInfo in case of an error
      //setResInfo([]);
      setResMenu([]);
    }

  };
  **/

  if(Object.keys(resMenu).length === 0) return <Shimmer />;

  if(Object.keys(restdata).length === 0) return <Shimmer />;

  const { costForTwoMessage, cuisines, name } = restdata.info;

  //const[showItems, setShowItems]=useState(false);

  //setShowItems(!showItems);

  
  //Check the length of object and if it is 0 then display shimmer
  
 
  const { itemCards } = resMenu?.card;
  console.log(itemCards);
    
  /**"<li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>" this is also way to take every 
        item from card also same thing we can do with price 
        <li>{itemCards[1].card.info.price}</li> and for both name and price
         we can take as 
         "<li>{itemCards[0].card.info.name}-{itemCards[0].card.info.price}</li>"*/

    return (
    <div className="text-center">
      <h1 className="font-bold text-xl py-4">{name}</h1>
      <h3 className="font-bold">{cuisines.join(", ")}</h3>
      <h3 className="font-bold">{costForTwoMessage}</h3>
      
      {/*accordion category*/}
      {resCat.map((category,index)=>(


        //controlled Component

        <RestaurantCategory 
        key={category.card.card.title}
        data={category.card.card}
        showItems={index==showIndex?true:false}
        setShowIndex={()=>setShowIndex(index)}
        />
      ))}
      
      
    </div>
  );
};

export default RestaurantMenu;




/*
<h2 className="font-bold text-xl py-4">Menu</h2> 
      
      <ul>
        {itemCards.map((item)=>(
        <li className="font-serif hover:text-lg flex items-center" key={item.card.info.id}>
            {item.card.info.name}- Rs {item.card.info.price/100 || item.card.info.defaultPrice/100}
            <h1>{item.card.info.name}</h1>
            <button className="px-4 py-2 bg-pink-700 m-4 rounded-lg " 
            onClick={()=>{
              setCount(count+1);}} >
                +</button>
                
        </li>
         
        ))}
       </ul>
       */