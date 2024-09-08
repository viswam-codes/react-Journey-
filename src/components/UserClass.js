// Class Based component study
import React from "react"


class UserClass extends React.Component {
    constructor(props){
   
        super(props);
        
        // console.log(this.props.phase+"Child constructor")

        this.state={
            userInfo:{
                name:"Dummy",
                location:"Dummy",
                avatar_url:"http:/dummy"
            }
        }
    }


   async componentDidMount(){
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
        // console.log(this.props.phase +"child Component did Mount")
        console.log(json);
        this.setState({
            userInfo:json
        })
    }
    

    render(){
        // console.log(this.props.phase +"child render")
        const {name,location,avatar_url}=this.state.userInfo;
       
        return (
            <div className="user-card">
            <h2>{name}</h2>
            <img src={avatar_url} />
            <h2>{location}</h2>
            <h2>Contact:907237119</h2>
        </div>
        )
    }
}

export default UserClass;