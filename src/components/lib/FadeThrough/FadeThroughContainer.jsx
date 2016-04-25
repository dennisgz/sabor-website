import React from 'react'
import FadeThroughComponent from './FadeThroughComponent'

export default class FadeThroughContainer extends React.Component {
  static defaultProps = {
    width: '100vw',
    height: '100vh'
  };

  state = {
    activeIndex: 0
  };

  componentDidMount() {
    this.interval = setInterval(
      this.next(),
      this.props.delay
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  next() {
    return () => {
      this.setState({ activeIndex: this.state.activeIndex + 1 })
      if (this.state.activeIndex === this.props.children.length)
        this.setState({ activeIndex: 0 })
    }
  }

  render() {
    const style = {
      width: this.props.width,
      height: this.props.height
    }
    return (
      <div style={ style }>
        <FadeThroughComponent
          activeIndex={ this.state.activeIndex }
          delay={ this.props.delay }
        >
          { this.props.children }
        </FadeThroughComponent>
      </div>
    )
  }
}



// // TODO: proptypes for likely to be reused components
