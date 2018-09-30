const defaultState = {
  loadedQuizzes: [],
  isLoading: false,
  quizId: '',
  unsavedChanges: false,
  isComplete: false,
  saveError: '',
  title: '',
  owner: '',
  createdBy: '',
  categories: [],
  description: '',
  hasSavedProgress: false,
  info: {subject: '', gradeLevel: '', visibility: 'Public'},
  catIndex: 0,
  teams: [],
  activeQuestion: false,
  user: {error: ''}
}

const rootReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'CAT_ADD':
      const owner = state.user.username;
      const createdBy = owner;
      const catIndex = state.title ? 5 : 0;
      return {
        ...state,
        title: action.title,
        owner,
        createdBy,
        categories: action.categories,
        description: action.description,
        catIndex,
        unsavedChanges: true
      }
    
    case 'QUIZ_ID_ADD':
      return {
        ...state,
        quizId: action.quizId
      }

    case 'QUEST_ADD' :
      const newCatIndex = state.categories.findIndex(cat => {
        return cat.questions.length === 0;
      })
      

      return {
        ...state,
        categories: action.categories,
        catIndex: newCatIndex === -1 ? 5 : newCatIndex
      }

    case 'TEAMS_ADD' :
      return {
        ...state,
        teams: action.teams
      }
    
    case 'QUIZ_INFO_ADD' : 
      return {
        ...state,
        info: action.info,
        unsavedChanges: true
      }
    
    case 'CAT_INDEX_CHANGE' :
      return {
        ...state,
        catIndex: action.catIndex,
        unsavedChanges: true
      }

    case 'QUIZ_SAVING' :
      return {
        ...state,
        isLoading: true
      }
    
    case 'QUIZ_SAVE' :
      return {
        ...state,
        unsavedChanges: false,
        isComplete: true
      }
    
      case 'PROGRESS_SAVED' :
        const owner= state.user.username;
        return {
          ...state,
          hasSavedProgress: true,
          quizId: action.quizId,
          isLoading: false,
          owner
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
      const info = action.quiz.info ? action.quiz.info : {subject: '', gradeLevel: '', visibility: 'Public'};
      return {
        ...state,
        title: action.quiz.name,
        categories: action.quiz.categories,
        description: action.quiz.description,
        info,
        quizId: action.quiz._id,
        owner: action.quiz.owner,
        createdBy: action.quiz.createdBy,
        isComplete: action.quiz.isComplete !== false,
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
        user: {username, error: ''}
      }

    case 'ERROR_LOGIN' :
      return {
        ...state,
        user: {error: action.message}
      }

    case 'ERROR_CLEAR' :
      return {
        ...state,
        user: {...state.user, error: ''}
      }

    case 'GAME_RESTART' :
      const user = state.user
      return {
        ...defaultState,
        user: user
      }
    
    case 'USER_LOGOUT' :
      return {
        ...state,
        user: {error: ''}
      }

    default :
      return state;
  }
}

export default rootReducer;
