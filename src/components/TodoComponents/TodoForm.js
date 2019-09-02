import React from 'react'

class TodoForm extends React.Component {
    render() {
        return (
            <>
            <input onChange={this.handleMessageToState}/>
            <button onClick={this.handleAddTodoItem}>Add to List</button>
            </>
        )
    }
}

export default TodoForm