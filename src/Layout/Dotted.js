import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {convertMmToPx} from '../utils/converter'
import DottedLine from './DottedLine'

class Dotted extends Component {
  render() {
    let lines = []
    let currentY = convertMmToPx(this.props.startY)
    let startPadding = convertMmToPx(this.props.startX)
    let endPadding = convertMmToPx(this.props.endX)

    while (this.props.height > 0 && currentY < (this.props.height - convertMmToPx(this.props.endY))) {
      lines.unshift(
        (<DottedLine 
          key={`line-${currentY}`} 
          isHorizontal={true}
          position={currentY}
          startPadding={startPadding}
          endPadding={endPadding}
          color={this.props.color} 
          width={this.props.width}
          height={this.props.height}
          radius={this.props.radius}
          dotSpace={this.props.dotSpace}
          strokeWidth={this.props.strokeWidth} />
        )
      )
      currentY = currentY + convertMmToPx(this.props.lineHeight)
    }

    return (
      <svg 
        className="paper-layout"
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

  height: 0,
  width: 0,

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
