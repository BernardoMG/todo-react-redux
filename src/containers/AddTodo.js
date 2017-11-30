import { connect } from 'react-redux'
import AddTodoForm from '../components/AddTodoForm'
import { addTodo } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodoForm)
