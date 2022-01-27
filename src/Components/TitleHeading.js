import React from 'react'

const TitleHeading = (props) => {
  return (
    <div class='leftcolumn'>
      <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <h3>{props.img}</h3>
        <h4>{props.text}</h4>
        <h5>{props.text2}</h5>
      </div>
    </div>
  )
}

export default TitleHeading
