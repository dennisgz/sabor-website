import React from 'react'
import reduxify from 'store/reduxify'
import { routeActions } from 'react-router-redux'
import FooterCard from 'components/FooterCard'

class FooterCardContainer extends React.Component {
  render() {
    return (
      <FooterCard push={ this.props.routeActions.push } />
    )
  }
}

export default reduxify({
  container: FooterCardContainer,
  selector: 'none',
  actions: { routeActions }
})
