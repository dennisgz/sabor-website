import React from 'react'
import CSSModules from 'react-css-modules'
import FadeThrough from 'react-fadethrough'
import title from 'assets/images/title.png'
import styles from 'assets/styles/cover.styl'

// import images from 'assets/images/cover'
let images = []
let done = false
let i = 1
while (!done) {
  try {
    images.push(require('assets/images/cover/' + i))
    i++
  } catch (e) {
    done = true // sketchy af
  }
}


class Cover extends React.Component {

  handleScroll() {
    $('html, body').animate({
      scrollTop: window.innerHeight
    }, 1000)
  }

  render() {
    const logo = { backgroundImage: 'url(' + title + ')' }
    // dodgy duplicate styling outside and inside
    return (
      <div styleName="image">
        <FadeThrough
          delay={ 8000 }
          height={ '100vh' }
          width={ '100vw' }
        >
        {
          images.map(
            (image) => (
              <div
                style={ { backgroundImage: 'url(' + image + ')' } }
                styleName="image"
                key={ image }
              >
                <div
                  style={ logo }
                  styleName="logo"
                />
              </div>
            )
          )
        }
        </FadeThrough>
        <div styleName="scroll-button" onClick={ this.handleScroll }>{ 'v' }</div>
      </div>
    )
  }
}

export default CSSModules(Cover, styles)


// TODO use omsehting other than 'v' for the scroll button
