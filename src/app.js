
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


const resList =  [
  {
    "info": {
      "id": "54167",
      "name": "Gokul Oottupura",
      "cloudinaryImageId": "542e37cb1343ea18ba8f0a2a43074e0f",
      "locality": "Thacheth Ln",
      "areaName": "#N/A",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "Kerala",
        "Chinese",
        "Thalis"
      ],
      "avgRating": 4.7,
      "veg": true,
      "parentId": "434888",
      "avgRatingString": "4.7",
      "totalRatingsString": "33K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 6.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "6.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Dosa.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Idli%20Vada.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Meals.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Kerala%20Food.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Dosa.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Idli%20Vada.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Meals.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Kerala%20Food.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kochi/gokul-oottupura-thacheth-ln-n-a-rest54167",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "104437",
      "name": "Aryaas",
      "cloudinaryImageId": "lg8kcu70bhbuhz46xauv",
      "locality": "Service Road",
      "areaName": "Nettoor",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South American",
        "Chinese",
        "Beverages"
      ],
      "avgRating": 4.8,
      "veg": true,
      "parentId": "18925",
      "avgRatingString": "4.8",
      "totalRatingsString": "1.1K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 21:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Curd%20Rice.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Curd%20Rice.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kochi/aryaas-service-road-nettoor-rest104437",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "772203",
      "name": "Starbucks Coffee",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/3/6c23f86c-8b57-47ae-9660-2ff0fad99fee_772203.JPG",
      "locality": "Kudannoor",
      "areaName": "Forum Mall",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream"
      ],
      "avgRating": 4.3,
      "parentId": "195515",
      "avgRatingString": "4.3",
      "totalRatingsString": "54",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 3.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kochi/starbucks-coffee-kudannoor-forum-mall-rest772203",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "60008",
      "name": "Alakapuri",
      "cloudinaryImageId": "k2why61tsxk9sh0sl68d",
      "locality": "Kakkanad",
      "areaName": "Kakkanad",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "Kerala"
      ],
      "avgRating": 4.6,
      "parentId": "20242",
      "avgRatingString": "4.6",
      "totalRatingsString": "215K+",
      "sla": {
        "deliveryTime": 44,
        "lastMileTravel": 11.3,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "11.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Coastal.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Kerala%20Food.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Coastal.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Kerala%20Food.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "16K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kochi/alakapuri-kakkanad-rest60008",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "754367",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_754367.JPG",
      "locality": "Aroor Bypass",
      "areaName": "Forum Thomsun mall",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.5,
      "parentId": "166",
      "avgRatingString": "4.5",
      "totalRatingsString": "1.8K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kochi/burger-king-aroor-bypass-forum-thomsun-mall-rest754367",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "63723",
      "name": "Galaxy Family Restaurant",
      "cloudinaryImageId": "jys7zsopl1sjy2wwxadd",
      "locality": "Kakkanad",
      "areaName": "Kakkanad",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Kerala",
        "Chinese",
        "South Indian",
        "Biryani",
        "Beverages"
      ],
      "avgRating": 4.6,
      "parentId": "20241",
      "avgRatingString": "4.6",
      "totalRatingsString": "71K+",
      "sla": {
        "deliveryTime": 46,
        "lastMileTravel": 10.5,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "10.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "OnlyOnSwiggy"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "Ratnesh_Badges/test2.png",
            "shortDescription": "Perfect ice cream delivery",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "OnlyOnSwiggy",
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "Ratnesh_Badges/test2.png",
                  "shortDescription": "Perfect ice cream delivery"
                }
              }
            ]
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "5.5K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kochi/galaxy-family-restaurant-kakkanad-rest63723",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "337924",
      "name": "Ibaco",
      "cloudinaryImageId": "w3iwvcx2wmoj5lwihh8p",
      "locality": "Panampilly Nagar",
      "areaName": "Panampilly Nagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Ice Cream"
      ],
      "avgRating": 4.7,
      "parentId": "3481",
      "avgRatingString": "4.7",
      "totalRatingsString": "596",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 7.2,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "7.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-07 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.5",
          "ratingCount": "498"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kochi/ibaco-panampilly-nagar-rest337924",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "121419",
      "name": "Palaaram",
      "cloudinaryImageId": "mz69ogfrejetsashmlrz",
      "locality": "Kadavanthra",
      "areaName": "Kadavanthra",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "Chinese",
        "Arabian",
        "Kerala"
      ],
      "avgRating": 4.5,
      "parentId": "18945",
      "avgRatingString": "4.5",
      "totalRatingsString": "21K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 6.5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "6.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 22:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Chilli%20Gobhi.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Fried%20Rice.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Coastal.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Chilli%20Gobhi.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Fried%20Rice.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Coastal.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹75 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.1",
          "ratingCount": "3.5K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kochi/palaaram-kadavanthra-rest121419",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "52395",
      "name": "Thaal Kitchen",
      "cloudinaryImageId": "xxi1rb25fxm3le88weuo",
      "locality": "Kakkanad",
      "areaName": "Kakkanad",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Kerala",
        "Arabian",
        "Ice Cream"
      ],
      "avgRating": 4.3,
      "parentId": "20290",
      "avgRatingString": "4.3",
      "totalRatingsString": "20K+",
      "sla": {
        "deliveryTime": 52,
        "lastMileTravel": 11.6,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "11.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.8",
          "ratingCount": "12K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kochi/thaal-kitchen-kakkanad-rest52395",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "56769",
      "name": "Natural Ice Cream",
      "cloudinaryImageId": "pzqizhikgymhcumrtytk",
      "locality": "Pallimukku",
      "areaName": "Pallimukku",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.8,
      "parentId": "2093",
      "avgRatingString": "4.8",
      "totalRatingsString": "8.5K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 7.4,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "7.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.6",
          "ratingCount": "5.2K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kochi/natural-ice-cream-pallimukku-rest56769",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "57445",
      "name": "Subway",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/b81f167b-ccfc-4cc5-98af-571c34e401e6_57445.JPG",
      "locality": "Panampilly Nagar",
      "areaName": "Elamkulam",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.4,
      "parentId": "2",
      "avgRatingString": "4.4",
      "totalRatingsString": "12K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 7.5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "7.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-07 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kochi/subway-panampilly-nagar-elamkulam-rest57445",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "303978",
      "name": "McDonald's",
      "cloudinaryImageId": "405645b3118d83e89db4c65361e43733",
      "locality": "Edappally",
      "areaName": "Edappally",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.6,
      "parentId": "630",
      "avgRatingString": "4.6",
      "totalRatingsString": "3.1K+",
      "sla": {
        "deliveryTime": 47,
        "lastMileTravel": 10.9,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "10.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 22:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.3",
          "ratingCount": "786"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kochi/mcdonalds-edappally-rest303978",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "801389",
      "name": "Makhani Darbar",
      "cloudinaryImageId": "c583da4b69d264ffe705e5918fad0e98",
      "locality": "Karukatharayil Plaza",
      "areaName": "Kakkanad",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Kebabs",
        "Mughlai",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4,
      "parentId": "478595",
      "avgRatingString": "4.0",
      "totalRatingsString": "28",
      "sla": {
        "deliveryTime": 52,
        "lastMileTravel": 10.6,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "10.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹249"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kochi/makhani-darbar-karukatharayil-plaza-kakkanad-rest801389",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "263840",
      "name": "Pure Veg Meals by LunchBox",
      "cloudinaryImageId": "pxtqovqbhclvufyfsoma",
      "locality": "Kakkanad",
      "areaName": "Chittethukara",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.5,
      "parentId": "21938",
      "avgRatingString": "4.5",
      "totalRatingsString": "511",
      "sla": {
        "deliveryTime": 51,
        "lastMileTravel": 10.6,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "10.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-09-06 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹159"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/city/kochi/pure-veg-meals-by-lunchbox-kakkanad-chittethukara-rest263840",
      "type": "WEBLINK"
    }
  }
]

const RestaurantCards=(props)=>{
    const {resData}=props

    const {cloudinaryImageId,name,cuisines,avgRatingString,costForTwo}=resData?.info;
  return (
    <div className='res-Card' style={{backgroundColor:"#f0f0f0"}}>
      <img className='res-logo' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{resData.info.sla.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

//keys are mandatory for better perfomance of our application
// Use unieque ID for keys >>>> using index as key(not recommended by REACT)
const Body = () => {
  return (
  <div className='body'>
    <div className='search'></div>
    <div className='res-container'>
      {
        resList.map((restaurant)=>(
          <RestaurantCards key={restaurant.info.id} resData={restaurant}/>
        ))
      }
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