import React ,{ Component }from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todo from './components/todos/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/todos/AddTodo';
import { v4 as uuidv4 } from 'uuid';
import About from './components/pages/About';
//import axios from 'axios';


class App extends Component {

  state = {
    todos:[]
  }

  markComplete = (id) => {

    this.setState({todos: this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    }) 
    })
  }

  delete = (id) => {
    
    let newTodoList = [];
    let todolist = [...this.state.todos];
    todolist.forEach((todo) => {
      if (todo.id !== id) {
        newTodoList.push(todo);
      }
    })
    this.setState({todos:newTodoList}); 
  }


  addTodo = (title) => {
    
    if (title !== ''){
      const newTodo = {
        title:title.toString(),
        completed:false,
        id:uuidv4()
      }

      let newList = [...this.state.todos];
      newList.push(newTodo);
      this.setState({todos:newList})
    }
  }

  render() {
    return(
      <Router>
        <div className="App">
          <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todo todos={this.state.todos} delete = {this.delete} markComplete = {this.markComplete}/>
              </React.Fragment>
            )}/>

            <Route exact path="/about" render={props => (
              <React.Fragment>
                <About />
              </React.Fragment>
            )} />
        </div>
      </Router>
    )
  }
}

export default App;
