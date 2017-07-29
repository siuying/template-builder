import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {convertMmToPx} from './utils/converter'
import Line from './Line'

class Overlay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
  }

  componentDidMount() {
    this.setState({ 
      height: this.svg.clientHeight,
      width: this.svg.clientWidth,
    })
  }

  render() {
    let lines = []
    let currentY = convertMmToPx(this.props.startY)
    while (this.state.height > 0 && currentY < (this.state.height - convertMmToPx(this.props.endY))) {
      lines.unshift(
        (<Line 
          key={`line-${currentY}`} 
          isHorizontal={true}
          position={currentY} 
          color={this.props.color} 
          width={this.state.width}
          height={this.state.height}
          strokeWidth={this.props.strokeWidth} />
        )
      )
      currentY = currentY + convertMmToPx(this.props.lineHeight)
    }

    return (
      <svg 
        width="100%" 
        height="100%"
        ref={ (ref) => this.svg = ref }>
        {lines}
      </svg>
    )
  }
}

Overlay.defaultProps = {
  color: '#aaa',
  strokeWidth: 1,

  // start as mm
  startY: 4,
  endY: 0,
  lineHeight: 6
}

Overlay.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  start: PropTypes.number
}

export default Overlay
