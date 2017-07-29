import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {convertMmToPx} from '../utils/converter'
import Line from './Line'

class Ruled extends Component {
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
    let startPadding = convertMmToPx(this.props.startX)
    let endPadding = convertMmToPx(this.props.endX)
    while (this.state.height > 0 && currentY < (this.state.height - convertMmToPx(this.props.endY))) {
      lines.unshift(
        (<Line 
          key={`line-${currentY}`} 
          isHorizontal={true}
          position={currentY}
          startPadding={startPadding}
          endPadding={endPadding}
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

Ruled.defaultProps = {
  color: '#aaa',
  strokeWidth: 1,

  startX: 0,
  endX: 0,
  startY: 20,
  endY: 10,
  lineHeight: 6
}

Ruled.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  start: PropTypes.number,

  startX: PropTypes.number,
  endX: PropTypes.number,
  startY: PropTypes.number,
  endY: PropTypes.number,
  lineHeight: PropTypes.number,
}

export default Ruled
