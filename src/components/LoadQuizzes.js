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
    const games = this.props.quizzes;
    const loadGame = game => {
      console.log(game)
      this.props.history.push(process.env.PUBLIC_URL + '/viewquiz');
      this.props.dispatch(loadQuiz(game));
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
