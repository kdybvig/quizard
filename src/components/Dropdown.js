import React, { Component } from 'react';
import { logout } from '../actions';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

class Dropdown extends Component {
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
        this.props.dispatch(logout());
        this.props.history.push(process.env.PUBLIC_URL + '/login')
    }

    render () {
        return (
            <div>
                <p
                className = "right-link"
                onClick={this.openMenu}>
                {this.props.username} <i class="fas fa-caret-down"></i>
                </p> 
                <div className={this.state.showMenu ? "dropdown" : "dropdown hidden"}>
                    <p
                    className="right-link"
                    onClick={this.logout}>
                        Logout
                    </p>
                </div>      
            </div>
        )
    }
}

export default withRouter(connect()(Dropdown));