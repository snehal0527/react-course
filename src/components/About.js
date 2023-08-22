import User from "./User";
import UserClass from "./UserClass";
/**
 * "<User Name={"Snehal Birajdar"}/>" this is line no 11 where we called
 *  our functional component that is < User /> component 
 * but now we are using class based component so I have removed it 
 * (same code I have written in class based component "UserClass.js" 
 * which is in functional component "User.js") 
 */
const About=()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is React web series</h2>
            
            <UserClass Name={"Snehal Birajdar"} Location={"Pune"}/>
        </div>
    );

};

export default About;




