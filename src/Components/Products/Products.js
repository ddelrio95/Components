import React from 'react'

const Products = (props) => {
  return (
    <div className='item'>
      <h4>{props.name}</h4>
      <h4>{props.name2}</h4>

      <img src='#' alt='image here' />
      <p>{props.itemNumber2}</p>
      <p>{props.description2}</p>
      <p>{props.price2}</p>

      <p>{props.itemNumber}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  )
}

export default Products
