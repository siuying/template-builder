import React, { Component } from 'react'
import Paper from '../views/Paper'

class App extends Component {
  render() {
    return (
      <div>
        <Paper layout="dotted" size="A4"/>
        <Paper layout="dotted" size="A4" backgroundColor="#FFF"/>
        <Paper layout="dotted" size="A5"/>
        <Paper layout="dotted" backgroundColor="#FFF" size="A5"/>
        <Paper layout="ruled" size="A4"/>
        <Paper layout="ruled" size="A4" backgroundColor="#FFF"/>
        <Paper layout="ruled" size="A5"/>
        <Paper layout="ruled" backgroundColor="#FFF" size="A5"/>
      </div>
    )
  }
}

export default App
