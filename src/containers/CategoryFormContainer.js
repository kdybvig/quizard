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
    categories: this.defaultCategories,
    nextPage: '/createquestions'
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
    const {title, categories, description} = this.state;
    const {user, quizId} = this.props;
    console.log('quizId', quizId)
    this.props.addCategories(title, user, categories, description, quizId)
    this.props.history.push(process.env.PUBLIC_URL + this.state.nextPage)
  }

  componentDidMount = () => {
    const {title, description, categories} = this.props;
    const nextPage = '/viewquiz'
    if(this.props.title) {
      this.setState({title, description, categories, nextPage})
    }
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
      buttonValue={this.props.buttonValue}
      editMode={Boolean(this.props.quizId)}
      />
    )
  }
}

const mapStateToProps = state => {
  const {title, description, categories, quizId} = state;
  return {
    user: state.user.username,
    buttonValue: state.isComplete ? 'Save' : 'Next >>',
    title,
    description,
    categories,
    quizId
  }
}

const mapDispatchToProps = dispatch => ({
  addCategories: (title, user, categories, description, quizId) => {
    dispatch(addCategories(title, user, categories, description, quizId));
    return;
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryFormContainer));
