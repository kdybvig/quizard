import React from 'react';
import { connect } from 'react-redux';
import savedGames from '../global/savedGames';
import { loadQuiz } from '../actions';
import { Link } from 'react-router-dom';

const LoadQuizzes = ({ dispatch }) => {

  const games = savedGames.map(game => {

    const newCategories = game.categories.map(cat=> {

      const newQuestions = cat.questions.map((question, index) => {
        return {name: question, answered: false, value: 100*(index + 1)};
      });

      return {
        ...cat,
        questions: newQuestions
      }
    });

    return {
      ...game,
      categories: newCategories
    }
  });


  return (
    <div  id='load-screen'>
      <h2> Choose A Quiz To Load </h2>
      {
        games.map((game,index) => {

          const key = `saved-game-${index}`

          return (
            <h4 key={key}>
              <Link
               to='/addteams'
               onClick={() => dispatch(loadQuiz(game.categories, game.name))}>
                {game.name}
              </Link>
            </h4>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(LoadQuizzes);
