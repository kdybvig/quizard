import SearchForm from '../components/SearchForm';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateFilters, updateSearchText, clearFilters, fetchFilteredQuizzes} from '../actions';

class SearchFormContainer extends Component {

    componentDidMount () {
        this.props.clearFilters();
    }

    render () {
        return (
            <SearchForm 
            filters={this.props.filters}
            searchText={this.props.searchText}
            handleSelectChange={this.props.handleSelectChange}
            handleInputChange={this.props.handleInputChange}
            handleSubmit={this.props.handleSubmit}
            />
        )
    }
}

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
        },
        clearFilters: () => {
            dispatch(clearFilters())
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        filters: stateProps.filters,
        searchText: stateProps.searchText,
        clearFilters: dispatchProps.clearFilters,
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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(SearchFormContainer);