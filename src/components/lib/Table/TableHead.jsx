import React from 'react'

export default class TableHead extends React.Component {
  render() {
    return (
      <thead>
        { this.props.children }
      </thead>
    )
  }
}
