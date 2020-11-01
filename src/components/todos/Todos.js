import React ,{ Component }from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todo extends Component {
  
  render() {
    if (this.props.todos.length !== 0) {

      return(
        this.props.todos.map((todoItem) => {
          return <TodoItem key={todoItem.id} delete={this.props.delete} todo = {todoItem} markComplete={this.props.markComplete}/>
        })
      )
      
    } else {
      return (<div>
        <h1 style={{
          'textAlign':'center'
        }}>No Items Here. Add Todos</h1>
      </div>)
    }   
  }
}

Todo.propTypes = {

  todos:PropTypes.array.isRequired

}


export default Todo;
