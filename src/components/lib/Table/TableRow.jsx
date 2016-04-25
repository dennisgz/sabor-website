import React from 'react'

// onclick a little sketch
export default class TableRow extends React.Component {
  render() {
    return (
      <tr>
        {
          this.props.cells.map(
            (cell) => (
              <th key={ cell } onClick={ this.props.onClick }>
                { cell }
              </th>
            )
          )
        }
      </tr>
    )
  }
}
