import React from 'react'
import CSSModules from 'react-css-modules'


export default class Description extends React.Component {

  render() {

    return (
      <div className="section solid">
        <div className="container">
          <h1 className="section-heading text-uppercase">
            { "Sabor: Columbia's First Latino Dance Troupe" }
          </h1>
          <hr />
          <p className="section-description text-justify">
            { this.props.text }
          </p>
        </div>
      </div>
    )
  }
}
