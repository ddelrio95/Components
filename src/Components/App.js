import React from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import BlogName from './BlogName'

// Functional Component
function App() {
  return (
    <div className='App'>
      <div className='header'>
        <Header />
      </div>
      <div className='blogname'>
        <BlogName />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}
export default App
