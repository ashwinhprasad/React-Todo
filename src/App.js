import React ,{ Component }from 'react';
import './App.css';
import Todo from './components/Todos'

class App extends Component {

  state = {
    todos:[{
    title:'Eat food',
    completed:false,
    id:1
  },{
    title:'Drink Water',
    completed:false,
    id:2
  },{
    title:'Watch Anime',
    completed:false,
    id:3
  }
  ]
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



  render() {
    return(
    <div className="App">
      <h1 style={{ 
        'textAlign':'center',
        'color':'rgba(3, 165, 252,1)',
        'textShadow':'black 1px 2px',
        'textDecoration':'underline'
       }}>
        Your Todo App
      </h1>
      <Todo todos={this.state.todos} markComplete = {this.markComplete}/>
    </div>
    )
  }
}

export default App;
