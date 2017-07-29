import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dotted from './Layout/Dotted'
import Ruled from './Layout/Ruled'
import './paper.css'

class Paper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
  }

  componentDidMount() {
    this.setState({ 
      height: this.paper.clientHeight,
      width: this.paper.clientWidth,
    })
  }

  render() {
    let Layout = this.currentLayout()
    return (
      <div className={this.props.size}>
        <section 
          className="sheet" 
          style={{background: this.props.backgroundColor}}
          ref={ (ref) => this.paper = ref }>
          <Layout 
            color={this.props.lineColor}
            width={this.state.width}
            height={this.state.height}
            />
        </section>
      </div>
    )
  }

  currentLayout() {
    switch (this.props.layout) {
      case 'dotted':
        return Dotted
      case 'ruled':
      default:
        return Ruled
    }
  }
}

Paper.defaultProps = {
  size: 'A4',
  backgroundColor: '#F3F0E4',
  lineColor: '#AAAAAA',
  layout: 'dotted'
}

Paper.propTypes = {
  size: PropTypes.string,
  backgroundColor: PropTypes.string,
  lineColor: PropTypes.string,
}

export default Paper
