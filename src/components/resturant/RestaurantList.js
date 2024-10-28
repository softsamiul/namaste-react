import React from 'react'
import RestaurantCard from './RestaurantCard'
import ShimerUi from '../ShimerUi'

const RestaurantList = ({resList}) => {
  console.log({resList})
  return !resList.length ? <ShimerUi /> :  (
    <div className='resturant_container'>
      {resList && resList.length > 0 && resList.map((item)=>{
        console.log(item.info.id)
        return <>
        <RestaurantCard cardInfo = {item} key={item.info.id} />
        </>
      })}

      <div>
       
      </div>
    </div>
  )
}

export default RestaurantList