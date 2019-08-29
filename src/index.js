import './main.scss'

import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './js/store/index.js'
import dataHeader from './data/headerItems.json'
import dataMenu from './data/menuItems.json'

render(
  <Provider store={store}>
    <App dataHeader={dataHeader} dataMenu={dataMenu} />
  </Provider>,
  document.querySelector('#app')
)
