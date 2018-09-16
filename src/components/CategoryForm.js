import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addCategories } from '../actions';
import { withRouter } from 'react-router-dom';
import Board from './Board';
import { categories } from '../global/demoBoard'

class CategoryForm extends Component {
  
  defaultCategories = new Array(5).fill(null).map(category => {
    return {name: '', questions: []}
  })

  state = {
    title: '',
    description: '',
    categories: this.defaultCategories
  }
  
  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCategoryChange = e => {
    e.preventDefault();
    const index= Number(e.target.getAttribute('index'));
    const newCategories = this.state.categories.slice();
    newCategories[index].name = e.target.value;
    this.setState({
      categories: newCategories
    })
  }

  renderInputs = () => {
    const inputs = [];
    for (let i=0; i<5; i++) {
      const key = `cat-${i}`
      const input = (
        <input 
        onChange={this.handleCategoryChange} 
        index={i} maxLength='30' 
        className='cInput' 
        value={this.state.categories[i].name}
        required
        />
      )
      inputs.push(
        <div className='catContainer' key={key}>
          <h5>{`Category ${i+1}`}</h5>
          {input}
        </div>)
    }
    return inputs;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addCategories(this.state.title, this.state.categories, this.state.description))
    this.props.history.push(process.env.PUBLIC_URL + '/createquestions')
  }
  render () {
    return (
      <div className='form-page cat-form'>
        <h1>New Quiz</h1>
        <Board categories={categories} title='Title' />
        <form onSubmit={this.handleSubmit}>
          <h5>Title</h5>
          <input 
          className='titleInput' 
          name="title"
          onChange={this.handleInputChange}
          value={this.state.title}
          required
          />
          <h5>Short Description</h5>
          <textarea 
          className='descriptionInput'
          cols = '50'
          rows = '2'
          name="description" 
          onChange={this.handleInputChange}
          value={this.state.description}
          required
          />
          {this.renderInputs()}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}


export default withRouter(connect()(CategoryForm));
