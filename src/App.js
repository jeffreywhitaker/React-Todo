import React from 'react'
import styled from 'styled-components'

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const MainBody = styled.section`
  background-color: cyan;
  max-width: 1100px;
  margin: 0 auto;
`

const MainHeader = styled.h2`
  text-align: center;
`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      task: "",
      todoList: [
        {
          task: "sdsdfd",
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
      <MainBody>
        <MainHeader>Jeff's To-Do App</MainHeader>
        <TodoForm 
          todoValue={this.state.task}
          todoformProps={this.state.todoList}
          handleMessageToState={this.handleMessageToState}
          handleAddTodoItem={this.handleAddTodoItem}
          handleDeletion={this.handleDeletion}
        />
        <TodoList messagesProps={this.state.todoList} handleSetAsComplete={this.handleSetAsComplete} />
        <span>*** Click on each item when completed.</span>
      </MainBody>
    )
  }
}

export default App
