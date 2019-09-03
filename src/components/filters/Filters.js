import React, { Component } from 'react'
import SwitchButton from '../toggle-switch-button/SwitchButton.js'
import Logo from './Logo.js'
import SmartFilters from './SmartFilters.js'
import StatusFilter from './StatusFilter.js'
import './filters.scss'

export default class Filters extends Component {
  constructor (props) {
    super(props)
    this.filterItems = this.props.filterItems
    this.linkLogo = this.props.linkLogo
    this.setFilterItems = this.setFilterItems.bind(this)
  }

  setFilterItems () {
    return (
      this.filterItems.map((item) =>
        (
          <li className={`content__smart-filter-item ${item.nameClassIcon}`} key={item.id}>
            <SwitchButton />
          </li>
        )
      )
    )
  }

  render () {
    return (
      <aside className='content__filters'>
        <section className='content__filters-section'>
          <Logo linkLogo={this.linkLogo} />
          <SmartFilters setFilterItems={this.setFilterItems} />
          <StatusFilter />
        </section>
      </aside>
    )
  }
}
