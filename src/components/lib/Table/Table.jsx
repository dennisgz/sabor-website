import React from 'react'

export default class Table extends React.Component {
  render() {
    return (
      <table className="u-full-width">
        { this.props.children }
      </table>
    )
  }
}
