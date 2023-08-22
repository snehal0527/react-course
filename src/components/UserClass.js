import React from "react";

class UserClass extends React.Component{
 
    // In Class Based Components for using props we need to take a 
    // constructor and also writing "super(props);" is must

    constructor (props){
        super(props);

       // console.log("Child Constructor")

       this.state={
        UserInfo: {
        Name:"Dummy",
        Location:"default",
        
    },
};

    }

    async componentDidMount() {

        //console.log("child component Did Mount");

        const data = await fetch("https://api.github.com/users/snehal0527");
      const json = await data.json();

      console.log(json);

      this.setState({
        UserInfo: json,
      })
}

componentDidUpdate(){
    console.log("component did update");
}
    
//componentWillUnmount() function is called just before our component is unmounting
//unmounting means when the component disappears from our web page or removing from our UI.
//when we will go other page componentWillUnmount() is called .
componentWillUnmount(){
    console.log("component Will Unmount");

}

    render(){

        //console.log("Child Render");
    
       /**
        * Below one is also way to write props and 
        * the "Name:{this.state.UserInfo.name}" is also one way to write a props
        * we can use any of them
        * here "avatar_url" is taken from the api that we have called.
        */
        const {location, avatar_url} = this.state.UserInfo;

       return (
        <div className="user-card">
            <img src={avatar_url}/>
        <h1>Name:{this.state.UserInfo.name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: snehalbirajdar@gmail.com</h3>
    </div>
        );
    };
}

export default UserClass;