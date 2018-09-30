import React from 'react';
import { Redirect } from 'react-router-dom';
import Board from './Board';
import { categories } from '../global/demoBoard'

const CategoryForm = props => {
    if(!props.user) {
      alert("You must be signed in to create a new quiz.");
      return <Redirect to={process.env.PUBLIC_URL + '/'} />
    }

    return (
      <div className='form-page cat-form'>
        <h1>New Quiz</h1>
        <Board categories={categories} title='Title' />
        <form onSubmit={props.handleSubmit}>
          <h5>Title</h5>
          <input 
          className='titleInput' 
          name="title"
          onChange={props.handleInputChange}
          value={props.title}
          required
          />
          <h5>Short Description</h5>
          <textarea 
          className='descriptionInput'
          cols = '50'
          rows = '2'
          name="description" 
          onChange={props.handleInputChange}
          value={props.description}
          required
          />
          {props.renderInputs()}
          <button type="submit">{props.buttonValue}</button>
        </form>
      </div>
    )
}

export default CategoryForm;
