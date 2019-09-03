import React, { Component } from 'react'
import Filters from '../filters/Filters.js'
import { connect } from 'react-redux'
import './PageContent.scss'

class PageContent extends Component {
  constructor (props) {
    super(props)
    this.props = this.props
    this.filterItems = this.props.dataPageContent.filterItems
    this.linkLogo = this.props.linkLogo
    this.flag = false
  }

  showOrHiddenContentPage (element) {
    if (this.props.showMenu) {
      element.classList.add('menu-opened')
      setTimeout(() => {
        element.classList.add('hide-content-page')
      }, 300)
      this.flag = true
    } else if (this.flag) {
      element.classList.remove('hide-content-page')
      setTimeout(() => {
        element.classList.remove('menu-opened')
      }, 10)
    }
  }

  render () {
    var contentPage = document.querySelector('.content')
    this.showOrHiddenContentPage(contentPage)
    return (
      <main className='content'>
        <div className='content__container-application-main'>
          <Filters filterItems={this.filterItems} linkLogo={this.linkLogo} />
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return { showMenu: state.showMenu }
}

const pageContent = connect(mapStateToProps)(PageContent)
export default pageContent
