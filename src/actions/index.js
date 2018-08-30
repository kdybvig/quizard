export const addCategory = (title, categories) => ({
  type: 'CAT_ADD',
  title,
  categories
})

export const addQuestions = (questions) => ({
  type: 'QUEST_ADD',
  questions
})

export const addTeams = (teams) => ({
  type: 'TEAMS_ADD',
  teams
})

export const awardPoints = (points, team) => ({
  type: 'TEAM_AWARD_PTS',
  points,
  team
})

export const changeActiveQuestion = (location) => ({
  type: 'ACT_QUEST_CHANGE',
  location
})

export const fetchQuizzes = () => {
  return dispatch => {
    dispatch({
      type: "QUIZZES_LOADING"
    });
    fetch("https://quizard-data.herokuapp.com/quizzes")
    .then(res => res.json())
    .then(json => {
      dispatch(loadQuizzes(json))
    })
  }
}

export const loadQuizzes = (quizzes) => {
  return {
    type: 'QUIZZES_LOAD',
    quizzes
  }
}

export const loadQuiz = (categories, title) => ({
  type: 'QUIZ_LOAD',
  categories,
  title
})

export const restartGame = () => ({
  type: 'GAME_RESTART'
})
