import React from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../actions';
import { withRouter } from 'react-router-dom';

const CategoryForm = (props) => {
  
  const renderInputs = () => {
    const inputs = [];
    for (let i=0; i<5; i++) {
      const key = `cat-${i}`
      const input = <input maxLength='30' className='cInput' required/>
      inputs.push(
        <div className='catContainer' key={key}>
          <h5>{`Category ${i+1}`}</h5>
          {input}
        </div>)
    }
    return inputs;
  }

  const testSubmit = (e) => {
    e.preventDefault();
    const formChildren = Array.from(e.target.childNodes);
    const titleNode = formChildren.filter(node => node.className === 'titleInput');
    const title = titleNode[0].value;
    const catContainerNodes   = formChildren.filter(node => node.className==='catContainer');
    const categories = catContainerNodes.map(container => {
      const categoryNode = Array.from(container.childNodes).filter(node => node.className==='cInput')
      return categoryNode[0].value;
    });
    const categoryObjects = categories.map(cat => {
      return {name: cat, questions: []}
    })
    props.dispatch(addCategory(title, categoryObjects))
    props.history.push(process.env.PUBLIC_URL + '/createquestions')
  }

  return (
    <div className='form-page'>
      <h1>New Review Game</h1>
      <form onSubmit={testSubmit}>
        <h5>Game Title</h5>
        <input className='titleInput' required/>
        <h5>Short Description</h5>
        <input className='descriptionInput' required/>
        {renderInputs()}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


export default withRouter(connect()(CategoryForm));
