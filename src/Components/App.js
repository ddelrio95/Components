import React from 'react'
import './App.css'
import Products from './Products/Products'
import Reviews from './Products/Reviews'

const App = () => {
  // These are the chacracteristics of the items, First product
  var name = 'Philips 238G4DHSD/00'
  const itemNumber = 'Item No. SC10316'
  const description = '38G4DHSD/00 | Philips | Black | 37 | 2012 | Box 1123 |'
  var price = '$156'

  var name2 = 'Philips 238G4DHSD/00'
  const itemNumber2 = 'Item No. DF123456'
  const description2 = '38G4DHSD/00 | Bed | Wood |'
  var price2 = '$240'

  // This is the first customer review!!!
  const firstCustomer = 'Dario del Rio'
  var comment1 = 'This is an amazing product!!!'
  // This is the second customer review!!!
  const secondCustomer = 'Juan Perez'
  var comment2 = 'Amazing quality. It works great!!!'
  const thirdCustomer = 'Susana Lopez'
  var comment3 = 'I highly recommend it'

  return (
    <div className='title'>
      <h1>TV's & Projectors</h1>
      <Products
        name={name}
        itemNumber={itemNumber}
        description={description}
        price={price}
      />

      <h1>Furniture</h1>
      <Products
        name2={name2}
        itemNumber2={itemNumber2}
        description2={description2}
        price2={price2}
      />

      <h2>Customer Review</h2>
      <Reviews name={firstCustomer} comment={comment1} />
      <br />
      <Reviews name={secondCustomer} comment={comment2} />
      <br />
      <Reviews name={thirdCustomer} comment={comment3} />
    </div>
  )
}

export default App
