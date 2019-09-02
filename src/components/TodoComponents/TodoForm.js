import React from 'react'

class TodoForm extends React.Component {
    render() {
        return (
            <>
            <input onChange={this.props.handleMessageToState} placeholder="...add todo" value={this.props.todoValue}/>
            <button onClick={this.props.handleAddTodoItem}>Add to List</button>
            <br />
            <button onClick={this.props.handleDeletion}>Delete</button>
            </>
        )
    }
}

export default TodoForm