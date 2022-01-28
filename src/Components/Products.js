import React from 'react'

const Products = (props) => {
  return (
    <div className='item'>
      <h4>{props.name}</h4>
      <img src='#' alt='image here' />
      <p>{props.itemNumber}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  )
}

export default Products
