import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.messagesProps.map((listItem) => {
                    return <Todo item={listItem}/>
                })}
            </div>
        )
    }
}

export default TodoList