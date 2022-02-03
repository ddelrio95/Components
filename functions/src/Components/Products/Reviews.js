import React from 'react'

const Reviews = (props) => {
  return (
    <div className='customer-review'>
      <div>
        <h4>{props.name}</h4>
        <p>{props.comment}</p>
      </div>
    </div>
  )
}

export default Reviews
