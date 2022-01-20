import React from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Cards from './Cards'

// Functional Component
function App() {
  return (
    <div className='info'>
      <Header />
      <Cards name='Dario' heroName='Software Engineer' />
      <Cards name='Chely' heroName='Nurse' />
      <Footer />
    </div>
  )
}
export default App
