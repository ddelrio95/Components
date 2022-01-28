import React from 'react'
import './App.css'
import Products from './Products'

const App = () => {
  // These are the chacracteristics of the items
  var name = 'Philips 238G4DHSD/00'
  const itemNumber = 'Item No. SC10316'
  const description = '38G4DHSD/00 | Philips | Black | 37 | 2012 | Box 1123 |'
  var price = 156

  return (
    <div className='title'>
      <h1>TV's & Projectors</h1>
      <Products
        name={name}
        itemNumber={itemNumber}
        description={description}
        price={price}
      />
    </div>
  )
}

export default App
