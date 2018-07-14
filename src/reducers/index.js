import { combineReducers } from 'redux'

const defaultState = {
  questions: [],
  submitted: false
}

const rootReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'SUBMIT':
      return {
        ...state,
        submitted: true,
        questions: action.questions
      }
    default :
      return state;
  }
}

export default rootReducer;
