import React from 'react'

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.messagesProps.map((listItem) => {
                    return <div>{listItem.task}</div>
                })}
            </div>
        )
    }
}

export default TodoList