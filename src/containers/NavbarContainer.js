import React from 'react';
import { connect } from 'react-redux';
import { restartGame } from '../actions';
import Navbar from '../components/Navbar';

const NavbarContainer = (props) => {
    return (
        <Navbar
        restartGame = {props.restartGame}
        user = {props.user}
         />
    )
};

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    restartGame: () => dispatch(restartGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);