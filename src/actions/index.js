export const addCategories = (title, user, categories, description, quizId) => {
  return dispatch => {
    dispatch({
      type: 'CAT_ADD',
      title,
      categories,
      description
    });
    if(!quizId){
      fetch("https://quizard-data.herokuapp.com/quizzes/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          name: title, 
          owner: user.username,
          createdBy: user.username,
          userId: user.userId,
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
      .catch(err => {
        console.log(err)
      })
    } else {
      fetch(`https://quizard-data.herokuapp.com/quizzes/${quizId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          name: title, 
          categories, 
          description
        })
      })
      .then(res => res.json())
      .then(json => {
      })
      .catch(err => {
        console.log(err)
      })
    }
    
  }

    
}

export const addQuestions = (categories,quizId) => {
  return dispatch => {
    dispatch({
      type: 'QUEST_ADD',
      categories
    });
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
    })
    .catch(err => {
      console.log(err)
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

export const updateFilters = filters => {
  return {
    type: 'FILTERS_UPDATE',
    filters
  }
}

export const updateSearchText = searchText => {
  return {
    type: 'SEARCH_TEXT_UPDATE',
    searchText
  }
}

export const fetchFilteredQuizzes = (filters, searchText) => {
  console.log('fetching filtered quizzes')
  return dispatch => {
    const {subject, grade} = filters
    const paramsArr = []
    if(subject) paramsArr.push(`subject=${subject}`)
    if(grade) paramsArr.push(`grade=${grade}`)
    if(searchText) paramsArr.push(`search=${searchText}`)
    const params = paramsArr.join('&');
    console.log(params)
    fetch(`https://quizard-data.herokuapp.com/quizzes?${params}`)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      dispatch(loadQuizzes(json))
    })
    .catch(err => {
      console.log(err)
    })
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
      dispatch(loginUser(json.username, json._id))
    })
  }
}

export const loginError = message => ({
  type: 'ERROR_LOGIN',
  message
})

export const loginUser = (username, userId) => ({
  type: 'USER_LOGIN',
  username,
  userId
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

export const changeCatIndex = catIndex => ({
  type: 'CAT_INDEX_CHANGE',
  catIndex
})

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
      dispatch({
        type: 'QUIZ_SAVE'
      })
    })
    .catch(err => {
      console.log(err)
    })
    
  }
}

export const updateProgress = (quiz, hasSavedProgress, quizId) => {
  return dispatch => {
    dispatch({
      type: 'QUIZ_SAVING'
    });
    if(!hasSavedProgress){
      fetch("https://quizard-data.herokuapp.com/quizzes/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(quiz)
      })
      .then(res => res.json())
      .then(json => {
        if(!json._id) {
          console.log('error',json)
          return;
        }
        dispatch({
          type: 'PROGRESS_SAVED',
          quizId: json._id
        })
      })
      .catch(err => {
        console.log(err)
      })
    } else {
      fetch(`https://quizard-data.herokuapp.com/quizzes/${quizId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          categories: quiz.categories,
          teams: quiz.teams
        })
      })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: 'PROGRESS_SAVED',
          quizId: json._id
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
    
  }   
}

export const fetchQuizzesByUser = username => {
  return dispatch => {
    dispatch({
      type: "QUIZZES_LOADING"
    });
    fetch(`https://quizard-data.herokuapp.com/quizzes/user/${username}`)
    .then(res => res.json())
    .then(json => {
      dispatch(loadUserQuizzes(json))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const fetchPublicQuizzesByUser = username => {
  console.log('fetching public quizzes by user')
  return dispatch => {
    dispatch({
      type: "QUIZZES_LOADING"
    });
    fetch(`https://quizard-data.herokuapp.com/quizzes/public/user/${username}`)
    .then(res => res.json())
    .then(json => {
      dispatch(loadQuizzes(json))
      console.log(json)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const loadUserQuizzes = userQuizzes => {
  return {
    type: 'QUIZZES_LOAD_USER',
    userQuizzes
  }
}

export const deleteQuiz = (quizId, username) => {
  return dispatch => {
    fetch(`https://quizard-data.herokuapp.com/quizzes/delete/${quizId}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      dispatch(fetchQuizzesByUser(username))
    })
    .catch(err => {
      console.log(err)
    })
    
  }
}


export const changeMultiplier = () => {
  return {
    type: 'MULTIPLIER_CHANGE'
  }
}