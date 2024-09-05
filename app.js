
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * header
 * -logo
 * -Nav items
 * body
 * -search
 * -Restaurant Container
 * -Resstaurant Card
 *    -Img
 *    -Name of res,Star rating,cuisine ,delivery time etc
 * footer
 * -copyright
 * -links
 * -addresss
 * -contact
 */

const Header = ()=>{
  return (
    <div className='header'>
      <div className='logo-container'>
          <img  className="logo" src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/31858f64574437.5ad6dd7253bb4.jpg' />
      </div>
      <div className='nav-items'>
        <ul className='navList'>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}



const RestaurantCards=(props)=>{
  return (
    <div className='res-Card' style={{backgroundColor:"#f0f0f0"}}>
      <img className='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/92e2a4ce7f38b751e16c098d1d611a3f' />
      <h3>{props.resName}</h3>
      <h4>Biriyani,North Indian,Chinese</h4>
      <h6>4.4 stars</h6>
      <h6>38 minutes</h6>
    </div>
  )
}

const Body = () => {
  return (
  <div className='body'>
    <div className='search'></div>
    <div className='res-container'>
      < RestaurantCards resName="Arabian Fiesta" />
      < RestaurantCards resName="KFC" />
    </div>
  </div>
  )
}



const AppLayout = ()=>{
  return (
    <div className="app">
      < Header />
      < Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< AppLayout />)