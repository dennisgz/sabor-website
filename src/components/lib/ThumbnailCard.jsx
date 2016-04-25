import React from 'react'

// TODO: add line breaks for txt files.
export default class ThumbnailCard extends React.Component {
  render() {
    const { title, subtitle, imgsrc } = this.props
    const outerStyle = {
      textAlign: 'center',
      border: '1px black',
      borderRadius: '5px'
    }
    // const imageStyle = {
    //   backgroundImage: 'url(' + imgsrc + ')',
    //   backgroundSize: 'contain',
    //   backgroundPosition: 'center',
    //   backgroundRepeat: 'no-repeat',
    //   height: 500,
    //   borderRadius: '50px'
    // }
    const imageStyle = {
      width: 200,
      height: 200,
      borderRadius: '50%',
      backgroundImage: 'url(' + imgsrc + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      verticalAlign: 'middle',
      margin: '0 auto'
    }

    return (
      <div
        className="four columns"
        onClick={ this.props.handleClick }
        style={ outerStyle }
      >
        <div className="u-max-full-width">
          <div style={ imageStyle } />
        </div>
        <h5>{ title }</h5>
        <p>{ subtitle }</p>
      </div>
    )
  }
}


// TODO: Convert style to @media stuff classname HERO style.
// TODO: make CLICKABLE css, simple border radius colour change.
