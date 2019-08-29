import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showMenu } from './../../js/actions/index.js'
import { SHOW_HIDE_MENU } from './../../js/constants/actions-types.js'

class HamburgerButton extends Component {
  constructor (props) {
    super(props)
    this.state = { isToggleOn: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    const clickedElement = event.target.closest('.header__btnHamburger-container')
    if (clickedElement) {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }))
      this.props.showMenu({ type: SHOW_HIDE_MENU })
    }
  }

  render () {
    const toggleFlag = this.state.isToggleOn ? 'header__btnHamburger--pressed' : ''
    return (
      <div onClick={this.handleClick} className='header__btnHamburger-container'>
        <button className={`header__btnHamburger ${toggleFlag}`}>
          <span className='header__btnHamburger-line header__btnHamburger-line--top' />
          <span className='header__btnHamburger-line header__btnHamburger-line--bottom' />
        </button>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    showMenu: flag => dispatch(showMenu(flag))
  }
}

const hamburgerButton = connect(null, mapDispatchToProps)(HamburgerButton)

export default hamburgerButton
