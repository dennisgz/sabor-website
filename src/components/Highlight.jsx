import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'assets/styles/highlight'

class Highlight extends React.Component {
  handleClick() {
    return () => this.props.push(this.props.path)
  }

  render() {
    const { imgsrc, text } = this.props
    const imageStyle = { backgroundImage: 'url(' + imgsrc + ')' }
    return (
      <div className="container-fluid">
        <div
          styleName="image"
          style={ imageStyle }
          onClick={ this.handleClick() }
        >
          <h3 styleName="text" className="pull-right">{ text }</h3>
        </div>
      </div>
    )
  }
}

export default CSSModules(Highlight, styles)
