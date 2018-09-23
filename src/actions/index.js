export const addCategories = (title, username, categories, description) => {
  return dispatch => {
    dispatch({
      type: 'CAT_ADD',
      title,
      categories,
      description
    });
    fetch("https://quizard-data.herokuapp.com/quizzes/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        name: title, 
        owner: username,
        categories, 
        description,
        isComplete: false 
      })
    })
    .then(res => res.json())
    .then(json => {
      if(!json._id) {
        console.log('error',json)
        return;
      }
      dispatch({
        type: 'QUIZ_ID_ADD',
        quizId: json._id
      })
    })
  }

    
}

export const addQuestions = (categories,quizId) => {
  return dispatch => {
    dispatch({
      type: 'QUEST_ADD',
      categories
    });
    console.log('just added question')
    fetch(`https://quizard-data.herokuapp.com/quizzes/${quizId}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        categories
      })
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
    })
  }
  
}

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

export const loadQuiz = (quiz) => ({
  type: 'QUIZ_LOAD',
  quiz
})

export const fetchUser = user => {
  const {username, password} = user;
  return dispatch => {
    dispatch({
      type: "USER_LOADING"
    });
    fetch("https://quizard-data.herokuapp.com/users/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({username, password})
    })
    .then(res => res.json())
    .then(json => {
      if(!json.username) {
        dispatch(loginError(json));
        return;
      }
      dispatch(loginUser(username))
    })
  }
}

export const loginError = message => ({
  type: 'ERROR_LOGIN',
  message
})

export const loginUser = (username) => ({
  type: 'USER_LOGIN',
  username
})

export const createUser = user => {
  const {username, password} = user;
  return dispatch => {
    dispatch({
      type: "USER_LOADING"
    });
    fetch("https://quizard-data.herokuapp.com/users/register", {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(json => {
      if(!json.username) {
        dispatch(loginError(json));
        return;
      }
      dispatch(loginUser(username, password))
    })
  }
}

export const clearLoginError = () => ({
  type: 'ERROR_CLEAR'
})

export const logout = () => ({
  type: 'USER_LOGOUT'
})

export const restartGame = () => ({
  type: 'GAME_RESTART'
})

export const addQuizInfo = info => ({
  type: 'QUIZ_INFO_ADD',
  info
});

export const saveQuiz = (changesToSave, quizId) => {
  return dispatch => {
    dispatch({
      type: 'QUIZ_SAVING'
    });
    fetch(`https://quizard-data.herokuapp.com/quizzes/${quizId}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(changesToSave)
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      dispatch({
        type: 'QUIZ_SAVE'
      })
    })
    .catch(err => {
      console.log(err)
    })
    
  }
}
