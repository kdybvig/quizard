export const addCategory = (title, categories) => ({
  type: 'CAT_ADD',
  title,
  categories
})

export const addQuestions = (questions) => ({
  type: 'QUEST_ADD',
  questions
})

export const changeActiveQuestion = (question) => ({
  type: 'ACT_QUEST_CHANGE',
  question
})
