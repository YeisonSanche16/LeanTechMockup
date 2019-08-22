import React, { Component } from 'react'
import Menu from './components/menu/Menu.js'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.data = props.data
  }

  render () {
    return (
      <React.Fragment key='key'>
        <Menu data={this.data.logo} />
      </React.Fragment>
    )
  }
}
