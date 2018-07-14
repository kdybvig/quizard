import { combineReducers } from 'redux'

const defaultState = {
  title: '',
  categories: [],
  submitted: false
}

const rootReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'SUBMIT':
      return {
        ...state,
        submitted: true,
        title: action.title,
        categories: action.categories
      }
    default :
      return state;
  }
}

export default rootReducer;
