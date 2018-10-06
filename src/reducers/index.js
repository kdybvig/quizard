const defaultState = {
  loadedQuizzes: [],
  userQuizzes: {underConstruction: [], readyToPlay: [], inProgress: []},
  isLoading: false,
  quizId: '',
  unsavedChanges: false,
  isComplete: false,
  saveError: '',
  title: '',
  owner: '',
  createdBy: '',
  categories: [],
  multiplier: 1,
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
      const isComplete = state.categories.findIndex(cat => cat.questions.length === 0) === -1;
      console.log('quiz is complete:', isComplete)
      return {
        ...state,
        unsavedChanges: false,
        isComplete
      }
    
      case 'PROGRESS_SAVED' :
        return {
          ...state,
          hasSavedProgress: false,
          quizId: action.quizId,
          isLoading: false,
          owner: state.user.username
        }

    case 'ACT_QUEST_CHANGE' :
      const catIndex2 = action.location[0];
      const questIndex = action.location[1];
      const categories = state.categories.slice();
      categories[catIndex2].questions[questIndex].answered = true;

     return {
       ...state,
       hasSavedProgress: true,
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

    case 'MULTIPLIER_CHANGE' :
      console.log(state.multiplier)
      const multiplier = state.multiplier === 3 ? 1 : state.multiplier + 1;
      console.log('good times', multiplier)
      const newCats = state.categories.slice().map(cat => {
        const newCat = {...cat}
        newCat.questions = cat.questions.map((quest, index) => {
          if(quest.answered) return quest;
          const newQuest = {...quest};
          newQuest.value=(100*(index + 1))*multiplier;
          return newQuest;
        })
        return newCat;
      })

      console.log('meow',newCats)
      return {
        ...state,
        multiplier,
        categories: newCats
      }

    case 'QUIZ_LOAD' :
      const info = action.quiz.info ? action.quiz.info : {subject: '', gradeLevel: '', visibility: 'Public'};
      const teams = action.quiz.teams ? action.quiz.teams : [];
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
        teams,
        hasSavedProgress: false,
        catIndex: 5
      }
    
    case 'QUIZZES_LOAD' :
      return {
        ...state,
        isLoading: false,
        loadedQuizzes: action.quizzes
      }

    case 'QUIZZES_LOAD_USER' :
      return {
        ...state,
        isLoading: false,
        userQuizzes: action.userQuizzes
      }

    case 'QUIZZES_LOADING' :
      return {
        ...state,
        isLoading: true
      }
    
    case 'USER_LOGIN' :
      const {username, userId} = action
      return {
        ...state,
        user: {username, userId, error: ''},
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
