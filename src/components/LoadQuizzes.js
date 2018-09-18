import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadQuiz, fetchQuizzes } from '../actions';
import QuizCard from './QuizCard'
import { withRouter } from 'react-router-dom';

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

    const loadGame = game => {
      console.log('hello')
      this.props.history.push(process.env.PUBLIC_URL + '/viewquiz');
      this.props.dispatch(loadQuiz(game.categories, game.name));
    }

    return (
      <div  id='load-screen'>
        <h2> Choose A Quiz To Load </h2>
        {this.props.isLoading && <h4>Loading...</h4>}
        <div className='flex-container'>
          {
            games.map((game,index) => {
    
              const key = `saved-game-${index}`
    
              return (
                <QuizCard key={key} game={game} handleClick={() => loadGame(game)}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  quizzes: state.loadedQuizzes,
  isLoading: state.isLoading
})

export default withRouter(connect(mapStateToProps)(LoadQuizzes));
