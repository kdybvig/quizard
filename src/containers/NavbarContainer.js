import React from 'react';
import { connect } from 'react-redux';
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



export default connect(mapStateToProps)(NavbarContainer);