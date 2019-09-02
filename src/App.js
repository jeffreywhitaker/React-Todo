import React from 'react'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      task: "",
      todoList: [
        {
          task: "starting task",
          id: Date.now(),
          completed: false,
        }
      ]
    }
  }

  handleMessageToState = event => {
    this.setState({task: event.target.value})
  }

  handleAddTodoItem = event => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          task: this.state.task,
          id: Date.now(),
          completed: false,
        }
      ]
    })
  }

  handleSetAsComplete = item => {
    item.completed = !item.completed;
    this.setState({
      todoList: this.state.todoList
    })
  }

  handleDeletion = event => {
    this.state.todoList.filter(() => {
      this.setState(
        ...this.state.todoList,
        this.state.todoList.completed === false)
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList messagesProps={this.state.todoList} handleSetAsComplete={this.handleSetAsComplete} />
        <TodoForm 
          todoformProps={this.state.todoList}
          handleMessageToState={this.handleMessageToState}
          handleAddTodoItem={this.handleAddTodoItem}
          handleDeletion={this.handleDeletion}
        />
      </div>
    )
  }
}

export default App
