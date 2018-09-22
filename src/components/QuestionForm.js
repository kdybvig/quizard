import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuestions } from '../actions';
import { withRouter, Redirect } from 'react-router-dom';

class QuestionForm extends Component {
  defaultQuestions = () => {
    return (
      new Array(5).fill(null).map((question,index) => {
        return {
          name: '',
          answer: '',
          answered: false,
          value: (index + 1)*100
        }
      })
    )
  }
  state = {
    questions: this.defaultQuestions()
  }

  renderInputs = () => {
    const inputs = [];
    for (let i=0; i<10; i++) {
      const key = `qatext-${i}`
      const questNum = Math.floor(i/2) + 1;
      const index = questNum -1;
      const className = i%2 === 0 ? 'questContainer' : 'questContainer ansContainer'
      const isQuestion = i%2 === 0;
      const type = isQuestion ? 'name' : 'answer'
      const label = isQuestion ? 
        `Question ${questNum} (${questNum*100})` : `Answer (Optional)` 
      const input = (
        <textarea 
        cols='50' 
        rows='2' 
        index={index}
        boxtype={type}
        onChange={this.handleInputChange}
        maxLength='250' 
        className='qInput' 
        value={this.state.questions[index][type]}
        required={isQuestion}
        />
      )
      inputs.push(
        <div className={className} key={key}>
          <h5>{label}</h5>
          {input}
        </div>
      )
    }
    return inputs;
  }

  handleInputChange = e => {
    e.preventDefault();
    const index= Number(e.target.getAttribute('index'));
    const type = e.target.getAttribute('boxtype');
    const newQuestions = this.state.questions.slice();
    newQuestions[index][type] = e.target.value;
    this.setState({
      questions: newQuestions
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const isLastCat = this.props.catIndex === 4;
    const questions = this.state.questions.slice();
    const categories = [...this.props.categories]
    categories[this.props.catIndex].questions = questions;
    this.props.dispatch(addQuestions(categories, this.props.quizId));
    this.setState({
      questions: this.defaultQuestions()
    })
    if(isLastCat) this.props.history.push(process.env.PUBLIC_URL + '/addteams')
  }

  render () {
    if(!this.props.categories.length) {
       return <Redirect to={process.env.PUBLIC_URL + '/'} />
    }
    return (
      <div className='form-page'>
        <form onSubmit={this.handleSubmit}>
          <h1>{this.props.title}</h1>
          <h4>Category {this.props.catIndex + 1}: {this.props.categories[this.props.catIndex].name}</h4>
          {this.renderInputs()}
          <button type="submit">{this.props.catIndex === 4 ? 'Next >>' : 'Next Category'}</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  catIndex: state.catIndex,
  title: state.title,
  quizId: state.quizId
})


export default withRouter(connect(mapStateToProps)(QuestionForm));
