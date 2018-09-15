import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../actions';
import { withRouter } from 'react-router-dom';

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
    this.props.dispatch(addCategory(this.state.title, this.state.categories))
    this.props.history.push(process.env.PUBLIC_URL + '/createquestions')
  }
  render () {
    return (
      <div className='form-page'>
        <h1>New Review Game</h1>
        <form onSubmit={this.handleSubmit}>
          <h5>Game Title</h5>
          <input 
          className='titleInput' 
          name="title"
          onChange={this.handleInputChange}
          value={this.state.title}
          required
          />
          <h5>Short Description</h5>
          <input 
          className='descriptionInput'
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
