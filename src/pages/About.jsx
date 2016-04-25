import React from 'react'

/* Containers */
import Navbar from 'containers/Navbar'
import Description from 'containers/Description'

/* Components */
import Footer from 'components/Footer'



// TODO: add line breaks for txt files.
export default class About extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <Navbar />
        <hr />
        <Description />
        <Footer />
      </div>
    )
  }
}

