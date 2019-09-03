import React, { Component } from 'react'
import Header from './components/header/Header'
import PageContent from './components/pageContent/PageContent.js'
import Menu from './components/menu/Menu.js'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.linkLogo = this.props.linkLogo
    this.dataMenu = this.props.dataMenu
    this.dataPageContent = this.props.dataPageContent
  }

  render () {
    return (
      <React.Fragment key='key'>
        <Header />
        <Menu dataMenu={this.dataMenu} />
        <PageContent dataPageContent={this.dataPageContent} linkLogo={this.linkLogo} />
      </React.Fragment>
    )
  }
}
