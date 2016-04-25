import React from 'react'
import CSSModules from 'react-css-modules'

/* Containers */
import LatestEvent from 'containers/LatestEvent'
import Blurb from 'containers/Blurb'
import Navbar from 'containers/Navbar'
import Highlights from 'containers/Highlights'
import FooterCard from 'containers/FooterCard'

/* Components */
import Cover from 'components/Cover'
import Footer from 'components/Footer'

/* Assets */
import imgsrc from 'assets/images/home-parallax.png'
import styles from 'assets/styles/home'


// TODO: add line breaks for txt files.
class Home extends React.Component {
  render() {
    const imageStyle = {
      backgroundImage: 'url(' + imgsrc + ')'
    }
    return (
      <div style={ imageStyle } styleName="image">
        <Cover />
        <Navbar home />
        <Blurb />
        <LatestEvent />
        <Highlights />
        <div styleName="parallax" />
        <FooterCard />
        <Footer />
      </div>
    )
  }
}

export default CSSModules(Home, styles)
