import { useState } from "react";
const User=(props)=>{

    /**
     * Here we use setCount function to update state variable 
     * which I have used in project.
     */
    const [count]= useState(0);

    const [count2]=useState(1);

    useEffect(()=>{
        //API calls
 },[]);

 async function getUserInfo(){
    const data = await fetch();
      const json = await data.json();
 }

    return (

    <div className="user-card">
        <h1>Count={count}</h1>
        <h1>Count2={count2}</h1>
        <h1>{props.Name}</h1>
        <h2>Location: Pune</h2>
        <h3>Contact: snehalbirajdar@gmail.com</h3>
    </div>

    );
};

export default User;