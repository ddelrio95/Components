import React from 'react'

const Cards = (props) => {
  console.log(props)
  return (
    <div class='cards'>
      <div class='container'>
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>{props.heroName}</p>
      </div>
    </div>
  )
}

export default Cards
