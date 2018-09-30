import EditButton from '../components/EditButton';
import {connect} from 'react-redux';
import {changeCatIndex} from '../actions';

import React from 'react';

const EditCategoryContainer = props => {
    return (
        <EditButton
        handleClick={() => props.editCategory(props.catIndex)}
        extraClass='cat'
        editText='Edit'
        />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        editCategory: catIndex => {
            dispatch(changeCatIndex(catIndex)) 
        }
    }
}

export default connect(null, mapDispatchToProps)(EditCategoryContainer); 