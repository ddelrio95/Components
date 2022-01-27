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
        <TitleHeading
          title='Title Heading'
          description='Title description'
          img='image here'
          text='Some text...'
          text2='Sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.'
        />
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
