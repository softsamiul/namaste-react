import React from 'react'
import {useParams} from 'react-router-dom'
import { resDetailData } from '../utils/utils'

const ResDetails = () => {
    const {resId} = useParams()
    console.log(resId)


    const allResDetails = resDetailData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    const currentResDetail = allResDetails.filter((item)=>console.log( item.card.info.id))

    console.log({allResDetails})
    console.log("current",currentResDetail)
  return (
    <div>
        {/* {allResDetails.length > 0 && allResDetails.map((res)=> <li key={res.card.info.id}>{res.card.info.name}</li>)} */}
        <p>Dynamic res id: {resId} - here now need to filter the menus using an api or staticdata and need to show on ui</p>
    </div>
  )
}

export default ResDetails