import './main.scss'

import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './js/store/index.js'
import linkLogo from './data/linkLogo.json'
import dataMenu from './data/menuItems.json'
import dataPageContent from './data/filterItems.json'

render(
  <Provider store={store}>
    <App linkLogo={linkLogo} dataMenu={dataMenu} dataPageContent={dataPageContent} />
  </Provider>,
  document.querySelector('#app')
)
