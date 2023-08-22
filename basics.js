import React from "react";
import ReactDOM from "react-dom/client";
/**
 * header
 * -Logo
 * -Menu Bar or navigation 
 * Body
 * -Search
 * -RestaurantContainer
 *  -RestaurantCard
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */

//React Element

const heading=React.createElement
("h1",{id:"heading"},"Hello from React");
console.log(heading);

//JSX

const jsxHeading=<h1> Hello React using JSX!</h1>
console.log(jsxHeading);

const Ready=()=><h1>This is my functional component!</h1>

const Car=()=><h1>This is my functional component for Car!</h1>

const Dress=()=>(
 <div>
  

<h1>This is my functional component for Dress!</h1>
<Car/>
</div>
);

const Saree=()=>(
<div>
  
<h1>This is my functional component for Saree!</h1>
<Dress/>
</div>
);

const Bike=()=>(
<div>
  
<h1>This is my functional component for Bike!</h1>
<Saree/>
</div>
);


const Title=()=>(
  <h1 className="head" tabIndex="5">
    namaste React</h1>
);
const number=10000;

const HeadComponent = () => (
   <>
   <div id="container">
    {100+300}
    {Title()}
    {console.log("hello")}
    <Title/>
    <Ready/>
    <Bike/>
     
   <h1 className="heading">namaste react functional component</h1>
   </div>
   <div id="container-2">
      <h1 className="heading2">Hello React</h1>
   </div>
   </>
);
  

   const root=ReactDOM.createRoot(document.getElementById("root"));
   root.render(<HeadComponent/>);