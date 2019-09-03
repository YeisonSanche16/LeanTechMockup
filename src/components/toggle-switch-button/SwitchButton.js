import React, { Component } from 'react'
import './SwitchButton.scss'

export default class SwitchButton extends Component {
  constructor (props) {
    super(props)
    this.state = { isToggleOn: false }
  }

  render () {
    return (
      <label className='content__smart-filter-switch'>
        <input type='checkbox' className='content__smart-filter-checkbox' />
        <span className='content__smart-filter-slider content__smart-filter--round' />
      </label>
    )
  }
}
