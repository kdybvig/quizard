import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadQuiz, fetchQuizzes } from '../actions';
import { Link } from 'react-router-dom';

class LoadQuizzes extends Component {

  componentDidMount() {
    this.props.dispatch(fetchQuizzes());
  }

  render() {
    const games = this.props.quizzes.map(game => {

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
                 to={process.env.PUBLIC_URL + '/addteams'}
                 onClick={() => this.props.dispatch(loadQuiz(game.categories, game.name))}>
                  {game.name}
                </Link>
              </h4>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  quizzes: state.loadedQuizzes
})

export default connect(mapStateToProps)(LoadQuizzes);
