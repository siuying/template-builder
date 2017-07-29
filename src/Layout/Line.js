import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Line extends Component {
  render() {
    let coords
    if (this.props.isHorizontal) {
      coords = {
        x1: this.props.startPadding,
        y1: this.props.position,
        x2: this.props.width - this.props.endPadding,
        y2: this.props.position,
      }
    } else {
      coords = {
        x1: this.props.position,
        y1: this.props.startPadding,
        x2: this.props.position,
        y2: this.props.height - this.props.endPadding,
      }
    }
    return (
      <line {...coords} stroke={this.props.color} strokeWidth={this.props.strokeWidth} />
    )
  }
}

Line.defaultProps = {
  width: 0,
  height: 0,

  position: 0, // vertical position
  startPadding: 0,    // start horizontal padding
  endPadding: 0,      // end horizontal padding

  isHorizontal: true,

  color: '#aaa',
  strokeWidth: 1
}

Line.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  position: PropTypes.number,
  startPadding: PropTypes.number,
  endPadding: PropTypes.number,

  isHorizontal: PropTypes.bool,

  color: PropTypes.string,
  strokeWidth: PropTypes.number
}

export default Line
