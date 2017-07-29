import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Line extends Component {
  render() {
    let coords
    if (this.props.isHorizontal) {
      coords = {
        x1: 0,
        y1: this.props.position,
        x2: this.props.width,
        y2: this.props.position,
      }
    } else {
      coords = {
        x1: this.props.position,
        y1: 0,
        x2: this.props.position,
        y2: this.props.height,
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
  position: 0,
  isHorizontal: true,

  color: '#aaa',
  strokeWidth: 1
}

Line.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  position: PropTypes.number,
  isHorizontal: PropTypes.bool,

  color: PropTypes.string,
  strokeWidth: PropTypes.number
}

export default Line
