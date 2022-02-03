import React from 'react'

const Products = (props) => {
  return (
    <div className='item'>
      <h4>{props.name}</h4>
      <p>{props.itemNumber}</p>
      <p>{props.description}</p>
      <p>{props.pricegit}</p>

      <img src='#' alt='image here' />
      <h4>{props.name2}</h4>
      <p>{props.itemNumber2}</p>
      <p>{props.description2}</p>
      <p>{props.price2}</p>
    </div>
  )
}

export default Products
