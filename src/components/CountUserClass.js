

/**
 * IMPORTANT NOTE:::::
 This is only for my knowledge this is not used anywhere in project.
this whole code is copied from UserClass.js
Need to change UserClass.js code so I have copied it 
**/


import React from "react";

class UserClass extends React.Component{
 
    // In Class Based Components for using props we need to take a 
    // constructor and also writing "super(props);" is must

    constructor (props){
        super(props);
/**
 * here as we use useState() Hook for using state variable in 
 * functional component
 * here in class based component Hooks are not used so we use state variable 
 * as given below.
 * this state is big Object which contains all the state variable we contains.
 */
        this.state={
            count:0,
            count2:2,
        };

        console.log("Child Constructor")

    }

    componentDidMount() {
        console.log("child component Did Mount");

    }

    

    render(){

        console.log("Child Render");
    
       /**
        * Below one is also way to write props and 
        * line no- 22 is also one way to write a props
        * we can use any of them
        */
        const {Location} = this.props;

       // const {count2}=this.state;

        /**we can destructure count also like 
        const {count}=this.state;
        and need to change below as Count:{count}.
        
        **/


        return (
        <div className="user-card">
        <h1>Count:{this.state.count}</h1>
        <button onClick={()=>{
            // never update state variable directly 
            this.setState({
                count:this.state.count+1,
                /**if we want to update count2 also then 
                we have to update it in same function 
                don't create one more setstate function.
                here only write like below given.

                 count2:this.state.count2+1,


                 IMPORTANT::::

                 Also if I have many count variables in 
                 this.state{
                    count1:0,
                    count3:3,
                    count6:8,
                    count5:7,
                 }
                 
                    then also in the setState function all count variables are 
                    not updated only those variables are updated which are 
                   we have given in the setState function
                   all the other count variables which are not in the setState
                    will remain same they will not updated.
                  **/
            })
        }}>Count Increase</button>
        <h1>{this.props.Name}</h1>
        <h2>Location: {Location}</h2>
        <h3>Contact: snehalbirajdar@gmail.com</h3>
    </div>
        );
    };
}

export default UserClass;