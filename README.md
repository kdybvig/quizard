# Quizard

This is a React/Redux application that allows the user to create Jeopardy-style quizzes.  The user enters a title, five categories and five questions for each category and the application creates a Jeopardy-style game with that information.  Users also have the option to load quizzes from the public database, and can login, create quizzes, and save them privately for future personally use or save them publically for others to view and play.

<img src='quizard.png' width='600px' height='600px' alt='screenshot'/>

## Built With

* [Create React App](https://github.com/facebookincubator/create-react-app)
* [React Router](https://reacttraining.com/react-router/core/guides/philosophy)
* [Redux](https://redux.js.org/)
* [SCSS](https://sass-lang.com/)

## Features

* The application tracks the scores for each team
* Question boxes turn grey and become unclickable once answered
* Users can navigate between pages with React Router
* Users can choose to create a new quiz or load a quiz from the database
* The game can be played with two to five teams
* Users can register for an account and sign in and out
* Users can create, save, and edit quizzes

## Future Updates

* Users will be able to search the list of saved quizzes
* Users will be able to rate public quizzes
* Users will be able to sort quizzes by date added, rating, or total views, as well as filter quizzes by subject

## Server
* Github repository located at https://github.com/kdybvig/quizard-server
* API URL: https://quizard-data.herokuapp.com/
