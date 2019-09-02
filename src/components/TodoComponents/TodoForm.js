import React from 'react'

class TodoForm extends React.Component {
    render() {
        return (
            <>
            <input onChange={this.props.handleMessageToState}/>
            <button onClick={this.props.handleAddTodoItem}>Add to List</button>
            <br />
            <button onClick={this.props.handleDeletion}>Delete</button>
            </>
        )
    }
}

export default TodoForm