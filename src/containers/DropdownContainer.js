import React, { Component } from 'react';
import {connect} from 'react-redux';
import Dropdown from '../components/Dropdown';
import {withRouter} from 'react-router-dom';

class DropdownContainer extends Component {
    state = {
        showMenu: false
    }

    openMenu = e => {
        e.preventDefault();
        document.addEventListener('click', this.closeMenu)
        this.setState({
            showMenu: true
        })
    }

    closeMenu = e => {
        e.preventDefault();
        document.removeEventListener('click', this.closeMenu)
        this.setState({
            showMenu: false
        })
    }

    componentWillUnmount () {
        document.removeEventListener('click', this.closeMenu)
    }

    render () {
        return (
            <Dropdown 
            openMenu={this.openMenu}
            showMenu={this.state.showMenu}
            username={this.props.username}
            />
        )
    }
}

const mapStateToProps = state => ({
    username: state.user.username
})


export default withRouter(connect(mapStateToProps)(DropdownContainer));