import React from 'react'
import CSSModules from 'react-css-modules'
import styles from 'assets/styles/navbar'
import logo from 'assets/images/logo.png'
import { Nav, Navbar, NavItem } from 'react-bootstrap'

// TODO FIX THIS
// put Hrs as borders/navbar spacers here, so can be responsive and disappear on mobile.
class NavigationBar extends React.Component {

  handleClick(path) {
    return () => this.props.push(path)
  }


  renderLinks() {
    return this.props.links.map((link, index) => (
      <NavItem key={ link + index } eventKey={ index } onClick={ this.handleClick('/' + link) }>
        <div className="text-uppercase">
          { link }
        </div>
      </NavItem>
    ))
  }


  renderHomeLinks() {
    return this.props.links.map((link, index) => (
      <NavItem key={ link + index } eventKey={ index } onClick={ this.handleClick('/' + link) }>
        <div className="text-uppercase" styleName="nav-item-spacer">
          { link }
        </div>
      </NavItem>
    ))
  }

  /**
   * This puts the logo in no matter what.
   */
  renderLogo() {
    const imageStyle = { backgroundImage: 'url(' + logo + ')' }
    return (
      <Navbar.Brand>
        <a href="" onClick={ this.handleClick('/home') }>
          { 'Sabor' }
        </a>
      </Navbar.Brand>
    )
  }

  /**
   * This logo only appears on mobile, since the cover-hero element already says "sabor" in big letters.
   */
  renderHomeLogo() {
    const imageStyle = { backgroundImage: 'url(' + logo + ')' }
    return (
      <Navbar.Brand>
        <a href="" onClick={ this.handleClick('/home') } styleName="responsive-brand">
          { 'Sabor' }
        </a>
      </Navbar.Brand>
    )
  }


  renderNavHome() {
    return (
      <div styleName="center-links-collapse">
        <div styleName="center-links">
          <Nav>
            {
              this.props.links.map((link, index) => (
                <NavItem key={ link + index } eventKey={ index } onClick={ this.handleClick('/' + link) }>
                  <div className="text-uppercase" styleName="nav-item-spacer">
                    { link }
                  </div>
                </NavItem>
              ))
            }
          </Nav>
        </div>
      </div>
    )
  }


  renderNav() {
    return (
      <Nav pullRight>
        {
          this.props.links.map((link, index) => (
            <NavItem key={ link + index } eventKey={ index } onClick={ this.handleClick('/' + link) }>
              <div className="text-uppercase">
                { link }
              </div>
            </NavItem>
          ))
        }
      </Nav>
    )
  }

  render() {
    return (
      <div styleName={ this.props.home ? "fixed-top-responsive tight" : "fixed-top-responsive container-fluid" }>
        <Navbar styleName={ this.props.home ? "tight" : "" }>
          <Navbar.Header>
            {
              this.props.home ?
                this.renderHomeLogo()
              : this.renderLogo()
            }
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {
              this.props.home ?
                this.renderNavHome()
              : this.renderNav()
            }
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}


export default CSSModules(NavigationBar, styles, { allowMultiple: true })

