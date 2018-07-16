const defaultState = {
  title: '',
  categories: [],
  catIndex: 0,
  teams: [],
  categoriesSubmitted: false,
  questionsSubmitted: false,
  teamsSubmitted: false,
  activeQuestion: false
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

    case 'TEAMS_ADD' :
      return {
        ...state,
        teams: action.teams,
        teamsSubmitted: true
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

    default :
      return state;
  }
}

export default rootReducer;
