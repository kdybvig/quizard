import {connect} from 'react-redux'
import Home from '../components/Home';
import {restartGame} from '../actions';

const mapStateToProps = state => ({
    linkTwo: state.user.username ? '/create' : '/signup',
    linkTwoText: state.user.username ? "Create a new quiz" : "Sign up (It's Free!)"
})

const mapDispatchToProps = dispatch => ({
    restartGame: () => {
        dispatch(restartGame())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)