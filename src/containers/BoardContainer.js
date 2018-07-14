import { connect } from 'react-redux';
import Board from '../components/Board'

const mapStateToProps = state => ({
  title: state.title,
  categories: state.categories
})


export default connect(
  mapStateToProps
)(Board)
