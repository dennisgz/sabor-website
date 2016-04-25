import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
import CSSModules from 'react-css-modules'
import styles from 'assets/styles/event'

class Event extends React.Component {
  render() {
    const { title, start_time, place, description, imgsrc, link } = this.props
    const imageStyle = {
      backgroundImage: 'url(' + imgsrc + ')'
    }
    return (
      <div className="section" styleName="coloured-backdrop">
        <div className="center-block section-heading">
          <a href={ link } styleName="link">
            <img
              src={ imgsrc }
              className="img-responsive img-thumbnail"
              styleName="image"
              alt="Latest event"
            />
          </a>
        </div>
        <div className="section-heading" styleName="center">
          <p className="text-left">{ title }</p>
          <p className="text-left">{ start_time }</p>
          <p className="text-left">{ place }</p>
          <p className="text-justify" styleName="description">{ description }</p>
          <Button bsStyle="danger" href={ link }>{ 'Learn more' }</Button>
        </div>
      </div>
    )
  }

}

export default CSSModules(Event, styles)

// TODO: Convert style to @media stuff classname HERO style.
// TODO: make CLICKABLE css, simple border radius colour change.
