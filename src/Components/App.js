import React from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import BlogName from './BlogName'
import Practice from './Practice'
import TitleHeading from './TitleHeading'
import AboutMe from './AboutMe'

// Functional Component
function App() {
  // Here is where the JS code is written
  // const fName = 'Dario'
  // const lName = 'del Rio'
  // const age = '27'
  return (
    <div className='App'>
      <div className='header'>
        <Header />
      </div>
      <div className='blogname'>
        <BlogName />
      </div>
      <div className='titleheading'>
        <TitleHeading />
        <TitleHeading />
        <TitleHeading />
      </div>
      <div className='aboutme'>
        <AboutMe />
      </div>
      {/* <div className='practice'>
        <Practice fName={fName} lName={lName} age={age} />
      </div> */}
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}
export default App
