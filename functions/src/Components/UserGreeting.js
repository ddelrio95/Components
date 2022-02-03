import React, { Component } from 'react'

// Conditional Rendering
class UserGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
    }
  }
  // Another approach to not showing content
  render() {
    return this.state.isLoggedIn && <div>Welcome Dario</div>

    // 3rd Approach, "best approach"
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Dario</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // )
    // 2nd Approach
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Dario</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>
    // 1st Approach
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Dario</div>
    // } else {
    //   return <div>Welcome Guest</div>
    // }
    // return (
    //   <div>
    //     <div>Welcome</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
