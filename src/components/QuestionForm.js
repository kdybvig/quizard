import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuestions } from '../actions';
import { withRouter, Redirect } from 'react-router-dom';

class QuestionForm extends Component {
  defaultQuestions = () => {
    return (
      new Array(5).fill({}).map((question,index) => {
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
      const isAnswer = i%2 === 0;
      const type = isAnswer ? 'name' : 'answer'
      const label = isAnswer ? 
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
        required/>
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
    console.log(this.state);
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
    this.props.dispatch(addQuestions(questions));
    console.log(this.defaultQuestions, 'hello')
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
          <h4>Category: {this.props.categories[this.props.catIndex].name}</h4>
          {this.renderInputs()}
          <button type="submit">{this.props.catIndex === 4 ? 'Save' : 'Next Category'}</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  catIndex: state.catIndex,
  title: state.title
})


export default withRouter(connect(mapStateToProps)(QuestionForm));
