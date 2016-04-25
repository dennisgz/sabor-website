import React from 'react'
import Navbar from 'containers/Navbar'

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <Navbar />
        <hr />
        <h1>{ 'notfound' }</h1>
      </div>
    )
  }
}
