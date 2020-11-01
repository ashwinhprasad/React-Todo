import React ,{ Component }from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todo extends Component {
  
  render() {
    return(
      this.props.todos.map((todoItem) => {
        return <TodoItem key={todoItem.id} delete={this.props.delete} todo = {todoItem} markComplete={this.props.markComplete}/>
      })
    )
  }
}

Todo.propTypes = {

  todos:PropTypes.array.isRequired

}


export default Todo;
