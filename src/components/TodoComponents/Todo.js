import React from 'react'
import styled from 'styled-components'

import './Todo.css'

const TodoListItem = styled.li`
    text-align: center;
    font-size: 20px;
`

class Todo extends React.Component {
    render() {
        return (
            <>
            <TodoListItem onClick={() => {this.props.handleSetAsComplete(this.props.item)}} className={`${this.props.item.completed ? 'completed' : ''}`}>
                {this.props.item.task}
            </TodoListItem>
            </>
        )
    }
}

export default Todo