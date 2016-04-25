import React from 'react'

export default class TableHead extends React.Component {
  render() {
    return (
      <tbody>
        { this.props.children }
      </tbody>
    )
  }
}
