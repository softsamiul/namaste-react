import React from 'react'
import resturants from '../../utils/mockData'
import { CLODINARY_URL_PREFIX } from '../../utils/utils'
import RestaurantCard from './RestaurantCard'

const RestaurantList = () => {
  return (
    <div className='resturant_container'>
      {resturants && resturants.length > 0 && resturants.map((item)=>{
        return <>
        <RestaurantCard cardInfo = {item}/>
        </>
      })}

      <div>
       
      </div>
    </div>
  )
}

export default RestaurantList