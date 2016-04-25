import React from 'react'

/* Containers */
import Navbar from 'containers/Navbar'

/* Components */
import BoardList from 'components/BoardList'
import TeamList from 'components/TeamList'
import Footer from 'components/Footer'

// TODO: add line breaks for txt files.
export default class Team extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <Navbar />
        <hr />
        <BoardList />
        <TeamList />
        <Footer />
      </div>
    )
  }
}
