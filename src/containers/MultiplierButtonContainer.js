import {connect} from 'react-redux';
import {changeMultiplier} from '../actions';
import MultiplierButton from '../components/MultiplierButton';

const mapStateToProps = state => {
    console.log(state.multiplier);
    const text = state.multiplier === 1 ? 'Double Points' :
        state.multiplier === 2 ? 'Triple Points' : 'Normal Points';
    return {
        text
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => {
            dispatch(changeMultiplier());
            return;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiplierButton);