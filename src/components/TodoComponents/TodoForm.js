import React from 'react'
import styled from 'styled-components'

const TodoFormDiv = styled.div`
    display: flex;
    margin: 20px 5px;
    justify-content: center;
`

const TodoFormButton = styled.button`
    background-color: lightpink;
    padding: 10px 10px;
    margin: 0 15px;
    border-radius: 15px;
`

const TodoFormInput = styled.input`
    padding: 10px 5px;
    margin: 0 15px;
`

class TodoForm extends React.Component {
 

    render() {
        return (
            <TodoFormDiv>
                <TodoFormInput onChange={this.props.handleMessageToState} placeholder="...add todo" value={this.props.todoValue}/>
                <TodoFormButton onClick={this.props.handleAddTodoItem}>Add to List</TodoFormButton>
                <TodoFormButton onClick={this.props.handleDeletion}>Delete</TodoFormButton>
            </TodoFormDiv>
        )
    }
}

export default TodoForm