# Quizard

This is a React/Redux application that allows the user to create jeopardy style quizzes.  The user enters a title, five categories and five questions for each category and the application creates a jeopardy game with that information.  Users also have the option to load previously generated quizzes, and in a future update users will be able to login, create quizzes, and save them for future use, as well as create public quizzes which other users will be able to access.

<img src='screenshot1.png' width='854px' height='656px'/>

## Built With

* [Create React App](https://github.com/facebookincubator/create-react-app)
* [React Router](https://reacttraining.com/react-router/core/guides/philosophy)
* [Redux](https://redux.js.org/)
* [SCSS](https://sass-lang.com/)

##Features

* The application tracks of the scores for each team
* Question boxes turn grey and become unclickable once answered
* Users can navigate between pages with React Router
* Users can choose to create a new quiz or load a pre-generated quiz
* The game can be played with two to five teams

##Future Updates

* Create login page so users can save private quizzes
* Allow users to save quizzes as either public or private, so that quizzes can be reused
* Users will be able to search the list of saved quizzes
* Users will be able to rate public quizzes
* Users will be able to sort quizzes by date added, rating, or total views, as well as filter quizzes by topic
