import React from 'react'

import CSSModules from 'react-css-modules'

// an array of 'members'. each member is an array['name','position','bio']
import boardMembers from 'assets/board_list.json'
import styles from 'assets/styles/board-list.styl'


class BoardList extends React.Component {
  constructor(props) {
    super(props)
    // An image array whose indices match with each member in <boardMembers>.
    //      If image doesn't exist, will be substituted with placeholder.
    boardMembers.forEach((member) => {
      try {
        member['imgsrc'] = require('assets/images/board-members/' + member.name)
      } catch (e) {
        member['imgsrc'] = require('assets/images/placeholder.png')
      }
    })
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">{ 'Board Members' }</h1>
        <hr />
        {
          boardMembers.map(
            (member, index) => (
              <div key={ member.name } className="row" styleName="board-member">
                <div className="col-md-3">
                  <img
                    src={ member.imgsrc }
                    width="150"
                    height="150"
                    className="img-circle"
                    alt={ member.name }
                  />
                </div>
                <div className="col-md-8 text-left">
                  <h3>{ member.name }</h3>
                  <p><strong>{ member.position }</strong></p>
                  <p>{ member.bio }</p>
                </div>
              </div>
            )
          )
        }
      </div>
    )
  }
}

export default CSSModules(BoardList, styles)
