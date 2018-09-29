import EditCategory from '../components/EditCategory';
import {connect} from 'react-redux';
import {changeCatIndex} from '../actions';

import React from 'react';

const EditCategoryContainer = props => {
    return (
        <EditCategory
        handleClick={() => props.editCategory(props.catIndex)}
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