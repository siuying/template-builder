import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dotted from './Layout/Dotted'

class Paper extends Component {
  render() {
    return (
      <div className={this.props.size}>
        <section 
          className="sheet" 
          style={{background: this.props.backgroundColor}}>
          <Dotted />
        </section>
      </div>
    )
  }
}

Paper.defaultProps = {
  size: 'A4',
  backgroundColor: '#F3F0E4'
}

Paper.propTypes = {
  size: PropTypes.string,
  backgroundColor: PropTypes.string
}

export default Paper
