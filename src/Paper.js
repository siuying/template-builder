import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Overlay from './Overlay'

class Paper extends Component {
  render() {
    return (
      <div className={this.props.size}>
        <section 
          className="sheet" 
          style={{background: this.props.backgroundColor}}>
          <Overlay />
        </section>
      </div>
    )
  }
}

Paper.defaultProps = {
  size: 'A4',
  backgroundColor: 'white'
}

Paper.propTypes = {
  size: PropTypes.string,
  backgroundColor: PropTypes.string
}

export default Paper
