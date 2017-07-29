import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {convertMmToPx} from '../utils/converter'
import DottedLine from './DottedLine'

class Dotted extends Component {
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
        (<DottedLine 
          key={`line-${currentY}`} 
          isHorizontal={true}
          position={currentY}
          startPadding={startPadding}
          endPadding={endPadding}
          color={this.props.color} 
          width={this.state.width}
          height={this.state.height}
          radius={this.props.radius}
          dotSpace={this.props.dotSpace}
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

Dotted.defaultProps = {
  color: '#aaa',
  strokeWidth: 1,
  radius: 1,

  startX: 5,
  endX: 0,
  startY: 4,
  endY: 0,

  lineHeight: 6,
  dotSpace: 20
}

Dotted.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  start: PropTypes.number,

  lineHeight: PropTypes.number,
  dotSpace: PropTypes.number,
}

export default Dotted
