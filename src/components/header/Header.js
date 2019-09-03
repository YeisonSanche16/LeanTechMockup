import React, { Component } from 'react'
import HamburgerButton from './HamburgerButton.js'
import './header.scss'

export default class Header extends Component {
  constructor (props) {
    super(props)
    this.blockName = { blockName: 'header' }
    this.dataHeader = props.dataHeader
  }

  render () {
    return (
      <header className='header'>
        <div className='header__contentHeader-container'>
          <HamburgerButton />
        </div>
      </header>
    )
  }
}
