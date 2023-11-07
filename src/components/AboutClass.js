import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class AboutClass extends React.Component {

    constructor(props){
        super(props);


        //console.log("Parent Constructor");
    }


    componentDidMount() {
        //console.log("Parent component class Did Mount");
        //API call
        
        //     this.timer=setInterval(()=>{
        //         console.log("Hello");
        //     },1000);
    
         }

     componentDidUpdate() {
    //     this.timer=setInterval(()=>{
    //         console.log("Hello");
    //     },1000);

     }

     componentWillUnmount()
    {
    //     clearInterval(this.timer);
    }

    render(){

        //console.log("Parent Render");

        return(
            <div>
                {/* <h1>About Class</h1> */}
                <div>
                    LoggedIn User
                    {/* {<UserContext.Consumer> is a Component not a hook} */}
                    <UserContext.Consumer>
                        {({loggedInUser})=>(
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                {/* <h2>This is React web series</h2> */}
                
                <UserClass />
            </div>
        );
    
        }


}

export default AboutClass;