import React from 'react'
import reduxify from 'store/reduxify'
import { routeActions } from 'react-router-redux'
import Highlight from 'components/Highlight'
import teamImg from 'assets/images/highlights/team'
import releveImg from 'assets/images/highlights/releve'
import joinImg from 'assets/images/highlights/join'

class Highlights extends React.Component {
  render() {
    return (
      <div className="solid section">
        <Highlight
          text={ 'Meet the Team' }
          imgsrc={ teamImg }
          path={ 'team' }
          push={ this.props.routeActions.push }
        />
        <Highlight
          text={ 'Relevé' }
          imgsrc={ releveImg }
          path={ 'releve' }
          push={ this.props.routeActions.push }
        />
        <Highlight
          text={ 'Join us' }
          imgsrc={ joinImg }
          path={ 'join' }
          push={ this.props.routeActions.push }
        />
      </div>
    )
  }
}

export default reduxify({
  container: Highlights,
  selector: 'none',
  actions: { routeActions }
})
