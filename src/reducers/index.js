const defaultState = {
  title: '',
  categories: [],
  catIndex: 0,
  categoriesSubmitted: false,
  questionsSubmitted: false,
  teamsSubmitted: false,
  activeQuestion: ''
}

const rootReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'CAT_ADD':
      return {
        ...state,
        categoriesSubmitted: true,
        title: action.title,
        categories: action.categories
      }
    case 'QUEST_ADD' :
      const catIndex = state.catIndex;
      const newCategories = state.categories.slice();
      newCategories[catIndex].questions = action.questions;
      const newCatIndex = catIndex + 1;
      const questionsSubmitted = newCatIndex === 5;
      console.log(newCategories);

      return {
        ...state,
        categories: newCategories,
        catIndex: newCatIndex,
        questionsSubmitted: questionsSubmitted
      }
    case 'ACT_QUEST_CHANGE' :
     return {
       ...state,
       activeQuestion: action.question
     }
    default :
      return state;
  }
}

export default rootReducer;
