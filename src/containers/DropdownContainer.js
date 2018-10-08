import React, { Component } from 'react';
import { logout, restartGame } from '../actions';
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

    logout = () => {
        this.props.dispatchLogout();
        this.props.history.push(process.env.PUBLIC_URL + '/login')
    }

    componentWillUnmount () {
        document.removeEventListener('click', this.closeMenu)
    }

    render () {
        return (
            <Dropdown 
            openMenu={this.openMenu}
            showMenu={this.state.showMenu}
            logout={this.logout}
            username={this.props.username}
            restartGame={this.props.restartGame}
            />
        )
    }
}

const mapStateToProps = state => ({
    username: state.user.username
})

const mapDispatchToProps = dispatch => {
    return {
        dispatchLogout: () => {
            dispatch(logout())
        },
        restartGame: () => {
            dispatch(restartGame())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DropdownContainer));