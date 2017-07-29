import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DottedLine extends Component {
  render() {
    let dots = []
    let dotX, dotY
    if (this.props.isHorizontal) {
      dotX = this.props.startPadding
      dotY = this.props.position
      while (this.props.width > 0 && dotX < this.props.width - this.props.endPadding) {
        dots.unshift(
          (
            <circle key={`dot-${dotX}`} cx={dotX} cy={dotY} r={this.props.radius} fill={this.props.color} />
          )
        )
        dotX = dotX + this.props.dotSpace
      }
    } else {
      dotX = this.props.position
      dotY = this.props.startPadding
      while (this.props.height > 0 && dotY < this.props.height - this.props.endPadding) {
        dots.unshift(
          (
            <circle key={`dot-${dotX}`} cx={dotX} cy={dotY} r={this.props.radius} fill={this.props.color} />
          )
        )
        dotY = dotY + this.props.dotSpace
      }
    }

    return (
      <g>
        {dots}
      </g>
    )
  }
}

DottedLine.defaultProps = {
  radius: 1,
  dotSpace: 20,

  width: 0,
  height: 0,

  position: 0, // vertical position
  startPadding: 0,    // start horizontal padding
  endPadding: 0,      // end horizontal padding

  isHorizontal: true,

  color: '#aaa',
  strokeWidth: 1
}

DottedLine.propTypes = {
  radius: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  position: PropTypes.number,
  isHorizontal: PropTypes.bool,

  color: PropTypes.string,
  strokeWidth: PropTypes.number
}

export default DottedLine
