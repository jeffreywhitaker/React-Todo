import React from 'react'
import './Todo.css'

class Todo extends React.Component {
    render() {
        return (
            <div onClick={() => {this.props.handleSetAsComplete(this.props.item)}} className={`${this.props.item.completed ? 'completed' : ''}`}>{this.props.item.task}</div>
        )
    }
}

export default Todo