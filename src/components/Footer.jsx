import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <footer style={ { background: '#D3D3D3', border: '1px solid #D3D3D3' } }>
        <div className="container">
          <div className="pull-left">
            <p>
              &copy;
              { ' 2016 Sabor ' }
              &middot;
              <a href="https://www.facebook.com/cusabor">{ ' facebook ' }</a>
              &middot;
              <a href="http://twitter.com/SaborTweets">{ ' twitter' }</a>
            </p>
          </div>
          <div className="pull-right">
            <a href="https://github.com/sunyang713/sabor-website">{ 'Site designed by Jonathan' }</a>
          </div>
        </div>
      </footer>
    )
  }
}
