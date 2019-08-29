import { SHOW_HIDE_MENU } from './../constants/actions-types.js'

const initialState = {
  showMenu: false
}

function rootReducer (state = initialState, action) {
  if (action.type === SHOW_HIDE_MENU) {
    return Object.assign({}, state, {
      showMenu: !state.showMenu
    })
  }
  return state
}

export default rootReducer
