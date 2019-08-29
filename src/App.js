import React, { Component } from 'react'
import Header from './components/header/Header'
import PageContent from './components/pageContent/PageContent.js'
import Menu from './components/menu/Menu.js'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.dataHeader = props.dataHeader
    this.dataMenu = props.dataMenu
  }

  render () {
    return (
      <React.Fragment key='key'>
        <Header dataHeader={this.dataHeader} />
        <Menu dataMenu={this.dataMenu} />
        <PageContent />
      </React.Fragment>
    )
  }
}
