import React from 'react'
import styled from 'styled-components'

import Todo from './Todo'

const SubHeader = styled.h3`
    text-align: center;
`

class TodoList extends React.Component {
    render() {
        return (
            <>
                <SubHeader>Things to do:</SubHeader>
                {this.props.messagesProps.map((listItem) => {
                    return <Todo handleSetAsComplete={this.props.handleSetAsComplete} item={listItem}  key={listItem.id}/>
                })}
            </>
        )
    }
}

export default TodoList