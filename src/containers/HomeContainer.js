import {connect} from 'react-redux'
import Home from '../components/Home';

const mapStateToProps = state => ({
    linkTwo: state.user.username ? '/create' : '/signup',
    linkTwoText: state.user.username ? "Create a new quiz" : "Sign up (It's Free!)"
})

export default connect(mapStateToProps)(Home)