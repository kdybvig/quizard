import React from 'react';
import { connect } from 'react-redux';
import savedGames from '../global/savedGames';
import { loadQuiz } from '../actions';
import { Link } from 'react-router-dom';

const LoadQuizzes = ({ dispatch }) => {

  const games =  savedGames.map(game => {
    game.categories.map(cat => {
      cat.questions.map((question, index) => {
        return {name: question, answered: false, value: 100*(index + 1)};
      })
    })
  });

  return (
    <div>
      {
        games.map(game => {
          return (
            <h4>
              <Link
               to='/addteams'
               onClick={() => dispatch(loadQuiz(game.categories))}>
                {game.name}
              </Link>
            </h4>
          )
        })
      }
    </div>
  )
}


export default connect()(LoadQuizzes);
