import React, { Component } from 'react'
import './Menu.scss'

export default class Menu extends Component {
  constructor (props) {
    super(props)
    this.shellMenu()
  }

  shellMenu () {
    console.log('get started')
    console.log(this.props)
  }

  render () {
    return <h1 className='titleMenu'>{`hola ${this.props.data.link}`}</h1>
  }
}
