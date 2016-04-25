import React from 'react'
import reduxify from 'store/reduxify'
import * as latestEventActions from 'actions/latestEvent'
import Event from 'components/Event'

class LatestEventContainer extends React.Component {
  constructor(props) {
    super(props)
    this.props.latestEventActions.pullLatestEvent()
  }

  render() {
    const { latestEvent, routeActions } = this.props
    return latestEvent.exists ? (
      <Event
        title={ latestEvent.title }
        imgsrc={ latestEvent.imgsrc }
        date={ latestEvent.date }
        start_time={ latestEvent.start_time }
        end_time={ latestEvent.end_time }
        place={ latestEvent.place }
        description={ latestEvent.description }
        link={ latestEvent.link }
      />
    ) : <div />
  }
}

export default reduxify({
  container: LatestEventContainer,
  selector: 'latestEvent',
  actions: { latestEventActions }
})
