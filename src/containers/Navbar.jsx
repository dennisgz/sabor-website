import React from 'react'
import { routeActions } from 'react-router-redux'
import reduxify from 'store/reduxify'
import Navbar from 'components/Navbar'

class NavbarContainer extends React.Component {
  render() {
    const links = ['Home', 'Team', 'Join', 'Releve'] // TODO make this better
    return (
      <Navbar
        push={ this.props.routeActions.push }
        links={ links }
        home={ this.props.home }
      />
    )
  }
}

export default reduxify({
  container: NavbarContainer,
  selector: 'none',
  actions: { routeActions }
})
