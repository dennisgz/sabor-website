import React from 'react'
import reduxify from 'store/reduxify'
import { routeActions } from 'react-router-redux'
import * as descriptionActions from 'actions/description'
import Description from 'components/Description'

class DescriptionContainer extends React.Component {

  constructor(props) {
    super(props)
    this.props.descriptionActions.pullDescription()
  }

  // TODO fix this
  render() {
    return (
      <Description
        text={ this.props.description.text }
        push={ this.props.routeActions.push }
      />
    )
  }
}

export default reduxify({
  container: DescriptionContainer,
  selector: 'description',
  actions: { descriptionActions, routeActions }
})
