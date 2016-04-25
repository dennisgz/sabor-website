import React from 'react'
import reduxify from 'store/reduxify'
import { routeActions } from 'react-router-redux'
import * as blurbActions from 'actions/blurb'
import Blurb from 'components/Blurb'

class BlurbContainer extends React.Component {
  constructor(props) {
    super(props)
    this.props.blurbActions.pullBlurb()
  }

  // TODO fix this
  render() {
    return (
      <Blurb
        text={ this.props.blurb.text }
        push={ this.props.routeActions.push }
      />
    )
  }
}

export default reduxify({
  container: BlurbContainer,
  selector: 'blurb',
  actions: { blurbActions, routeActions }
})
