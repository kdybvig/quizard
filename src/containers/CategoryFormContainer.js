import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addCategories } from '../actions';
import { withRouter } from 'react-router-dom';
import CategoryForm from '../components/CategoryForm';

class CategoryFormContainer extends Component {
  
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
    this.props.addCategories(this.state.title, this.props.user, this.state.categories, this.state.description)
    this.props.history.push(process.env.PUBLIC_URL + '/createquestions')
  }
  render () {
    return (
      <CategoryForm 
      user={this.props.user}
      title={this.state.title}
      description={this.state.description}
      categories={this.state.categories}
      handleSubmit={this.handleSubmit}
      handleInputChange={this.handleInputChange}
      handleCategoryChange={this.handleCategoryChange}
      renderInputs={this.renderInputs}
      />
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.username
})

const mapDispatchToProps = dispatch => ({
  addCategories: (title, user, categories, description) => {
    dispatch(addCategories(title, user, categories, description));
    return;
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryFormContainer));
