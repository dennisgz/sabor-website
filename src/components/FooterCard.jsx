import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
import CSSModules from 'react-css-modules'
import styles from 'assets/styles/footer-card.styl'

class FooterCard extends React.Component {

  push(link) {
    return () => this.props.push(link)
  }

  render() {
    const wellStyles = {maxWidth: 500, margin: '0 auto 10px'};
    return (
      <div >
        <h1 styleName="heading">{ 'Want a taste?' }</h1>
        <div className="section solid">
          <div className="container section-description">
            <div className="well" styleName="well">
              <Button
                styleName="button"
                bsStyle="danger"
                bsSize="large"
                onClick={ this.push('/join') }
                block
              >
                { 'Become part of our family' }
              </Button>
              <Button
                styleName="button"
                bsSize="large"
                href="https://lists.columbia.edu/mailman/listinfo/saborgbody"
                block
              >
                { 'Join our mailing list' }
              </Button>
            </div>
          </div>
          <div className="container section-description">
            <p>{ 'For all other questions or inquires, please e-mail us at' }</p>
            <p><em>{ 'sabor (dot) board (atsign) columbia (dot) edu' }</em></p>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(FooterCard, styles)


// TODO second button doesn't vertically align cause it's an href
