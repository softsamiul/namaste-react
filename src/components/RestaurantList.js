import React from 'react'
import ShimerUi from './ShimerUi'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router-dom'

const RestaurantList = ({resList}) => {
  return !resList.length ? <ShimerUi /> :  (
    <div className='resturant_container'>
      {resList && resList.length > 0 && resList.map((item)=><Link key={item.info.id} to={`/resturants/${item.info.id}`}>
        <RestaurantCard cardInfo = {item}  />
      </Link>
      )}

      <div>
       
      </div>
    </div>
  )
}

export default RestaurantList