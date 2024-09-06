import { CDN_URL } from "../../utils/constants";

const RestaurantCards=(props)=>{
    const {resData}=props

    const {cloudinaryImageId,name,cuisines,avgRatingString,costForTwo}=resData?.info;
  return (
    <div className='res-Card' style={{backgroundColor:"#f0f0f0"}}>
      <img className='res-logo' src={CDN_URL+ cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{resData.info.sla.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

export default RestaurantCards;