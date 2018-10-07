import SearchForm from '../components/SearchForm';
import { connect } from 'react-redux';
import {updateFilters, updateSearchText, fetchFilteredQuizzes} from '../actions';

const mapStateToProps = state => {
    return {
        filters: state.filters,
        searchText: state.searchText    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateSearchText: searchText => {
            dispatch(updateSearchText(searchText))
        },
        updateFilters: filters => {
            dispatch(updateFilters(filters))
        },
        fetchFilteredQuizzes: (filters, searchText) => {
            dispatch(fetchFilteredQuizzes(filters, searchText))
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        filters: stateProps.filters,
        searchText: stateProps.searchText,
        handleSelectChange: e => {
            e.preventDefault();
            const filters = {...stateProps.filters};
            filters[e.target.name] = e.target.value;
            dispatchProps.updateFilters(filters)
        },
        handleInputChange: e => {
            e.preventDefault();
            dispatchProps.updateSearchText(e.target.value);
        },
        handleSubmit: e => {
            e.preventDefault();
            dispatchProps.fetchFilteredQuizzes(stateProps.filters, stateProps.searchText)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SearchForm);