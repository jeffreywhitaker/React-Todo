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
      ],
      task: ''
    })
  }

  handleSetAsComplete = item => {
    item.completed = !item.completed;
    this.setState({
      todoList: this.state.todoList
    })
  }

  handleDeletion = event => {
    function deletionLogic(todoItem) {
      return todoItem.completed === false
    }

    this.setState({
      todoList: this.state.todoList.filter(deletionLogic)
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList messagesProps={this.state.todoList} handleSetAsComplete={this.handleSetAsComplete} />
        <TodoForm 
          todoValue={this.state.task}
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
