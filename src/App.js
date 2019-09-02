import React from 'react'
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      task: "",
      todoList: [
        {
          task: "",
          id: "",
          completed: false,
        }
      ]
    }
  }

  handleMessageToState = event => {
    console.log(this.state.task)
    this.setState({task: event.target.value})
  }
  handleAddTodoItem = event => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          task: this.state.task,
          id: "",
          completed: false,
        }
      ]
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList messagesProps={this.state.todoList} />
        <input onChange={this.handleMessageToState}/>
        <button onClick={this.handleAddTodoItem}>Add to List</button>
      </div>
    )
  }
}

export default App
