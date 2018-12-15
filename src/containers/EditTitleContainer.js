import EditButton from '../components/EditButton';
import {withRouter} from 'react-router-dom';

import React from 'react';

const EditTitleContainer = props => {
    return (
        <EditButton
        handleClick={() => props.history.push(process.env.PUBLIC_URL + '/createquiz')}
        extraClass='title'
        editText='Edit title, description, and categories'
        />
    )
}

export default withRouter(EditTitleContainer); 