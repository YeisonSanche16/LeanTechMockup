import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Menu.scss'

class Menu extends Component {
  constructor (props) {
    super(props)
    this.menuItems = props.dataMenu.links
    this.setMenuItems = this.setMenuItems.bind(this)
    this.props = this.props
  }

  setMenuItems () {
    return (
      this.menuItems.map((item) =>
        (
          <li className='navigation__nav-item' key={item.id}>
            <a className={`navigation__nav-link ${item.nameClassIcon}`}>
              <span>{item.name}</span>
            </a>
          </li>
        )
      )
    )
  }

  render () {
    const showMenu = this.props.showMenu ? 'navigation--show-menu' : ''
    return (
      <div className={`navigation__nav-container ${showMenu}`}>
        <nav className='navigation__nav-wrapper'>
          <ul className='navigation__nav-wrapper-Items'>
            {this.setMenuItems()}
          </ul>
        </nav>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return { showMenu: state.showMenu }
}

const menu = connect(mapStateToProps)(Menu)

export default menu
