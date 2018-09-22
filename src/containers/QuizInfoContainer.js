import QuizInfo from '../components/QuizInfo';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        info: state.info
    }
}

export default connect(mapStateToProps)(QuizInfo)