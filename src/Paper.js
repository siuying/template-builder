import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dotted from './Layout/Dotted'
import Ruled from './Layout/Ruled'

class Paper extends Component {
  render() {
    return (
      <div className={this.props.size}>
        <section 
          className="sheet" 
          style={{background: this.props.backgroundColor}}>
          <Dotted color={this.props.lineColor}/>
        </section>
      </div>
    )
  }
}

Paper.defaultProps = {
  size: 'A4',
  backgroundColor: '#F3F0E4',
  lineColor: '#AAAAAA'
}

Paper.propTypes = {
  size: PropTypes.string,
  backgroundColor: PropTypes.string,
  lineColor: PropTypes.string,
}

export default Paper
