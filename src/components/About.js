import User from "./User";
import React from 'react'
import UserClass from "./userClass";



class About extends React.Component {
    constructor(props){
        super(props);

        // console.log("Parent Constructor")
    }

    componentDidMount(){
        // console.log("Parent Component Did Mount")
    }

    render(){
        // console.log("Parent Render")
        return (
            <div className="about-container">
            <h1>About</h1>
            <h3>This is My Journey to Master REACT</h3>
            {/* < User name={"Viswam(function)"} location ={"Kerala(function)"}/> */}

            < UserClass name={"Viswam(class)"} location={"kerala(Class)"} phase={"first"}/>  
        </div>
        )
    }
}


export default About;