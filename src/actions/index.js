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

export const changeActiveQuestion = (location) => ({
  type: 'ACT_QUEST_CHANGE',
  location
})

export const awardPoints = (points, team) => ({
  type: 'TEAM_AWARD_PTS',
  points,
  team
})

export const loadQuiz = (categories, title) => ({
  type: 'QUIZ_LOAD',
  categories,
  title
})
