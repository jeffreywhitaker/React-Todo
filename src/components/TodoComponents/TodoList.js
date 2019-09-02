import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.messagesProps.map((listItem) => {
                    return <Todo handleSetAsComplete={this.props.handleSetAsComplete} item={listItem}  key={listItem.id}/>
                })}
            </div>
        )
    }
}

export default TodoList