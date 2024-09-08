import { useState,useEffect } from "react";



const User=(props)=>{
    // const [count,setCount]=useState(0);
    // const [count2]=useState(2);
 const [userInfo,setUserInfo]=useState({})

 useEffect(()=>{
   fetchData();
 },[])

 const fetchData=async ()=>{
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = data.json();
    console.log(json);
    setUserInfo(json);
 }
   
    const {name,location}=props;
    return (
        
        <div className="user-card">
            <h2>{name}</h2>
            <button onClick={()=>{
                setCount(count+1);
            }}>Change Button</button>
            <h2>count:{count}</h2>
            <h2>count2:{count2}</h2>
            <h2>{location}</h2>
            <h2>Contact:9072371195</h2>
        </div>
    )
}


export default User;