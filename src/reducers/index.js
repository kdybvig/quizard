const defaultState = {
  loadedQuizzes: [],
  isLoading: false,
  title: '',
  categories: [],
  catIndex: 0,
  teams: [],
  activeQuestion: false,
  user: {}
}

const rootReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'CAT_ADD':
      return {
        ...state,
        title: action.title,
        categories: action.categories,
        catIndex: 0
      }
    case 'QUEST_ADD' :
      const catIndex = state.catIndex;
      const newCategories = state.categories.slice();
      newCategories[catIndex].questions = action.questions;
      const newCatIndex = catIndex + 1;

      return {
        ...state,
        categories: newCategories,
        catIndex: newCatIndex
      }

    case 'TEAMS_ADD' :
      return {
        ...state,
        teams: action.teams
      }

    case 'ACT_QUEST_CHANGE' :
      const catIndex2 = action.location[0];
      const questIndex = action.location[1];
      const categories = state.categories.slice();
      categories[catIndex2].questions[questIndex].answered = true;

     return {
       ...state,
       categories: categories,
       activeQuestion: action.location
     }

    case 'TEAM_AWARD_PTS' :
      const newTeams = state.teams.map(team => {
        if(team.name === action.team) team.points += action.points;
        return team;
      })

      return {
        ...state,
        teams: newTeams,
        activeQuestion: false
      }

    case 'QUIZ_LOAD' :
      return {
        ...state,
        title: action.title,
        categories: action.categories,
        catIndex: 5
      }
    
    case 'QUIZZES_LOAD' :
      return {
        ...state,
        isLoading: false,
        loadedQuizzes: action.quizzes
      }

    case 'QUIZZES_LOADING' :
      return {
        ...state,
        isLoading: true
      }
    
    case 'USER_LOGIN' :
      const {username, password} = action
      console.log('login successful', {username, password})
      return {
        ...state,
        user: {username, password}
      }

    case 'ERROR_LOGIN' :
    return {
      ...state,
      user: {error: action.message}
    }

    case 'GAME_RESTART' :
      return defaultState

    default :
      return state;
  }
}

export default rootReducer;
