import React from 'react'
import './Cards.css'

const Cards = (props) => {
  console.log(props)
  return (
    <div class='cards'>
      <div class='container'>
        <div className='profile-top'>
          <div className='name'>{props.name}</div>
          <div className='cards_image'>
            <img src='https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png' />
          </div>
        </div>

        <div className='profile-bottom'>
          <p>{props.heroName}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
