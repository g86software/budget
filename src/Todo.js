import React from 'react'

export default function TodoListItem({ id, todo, inprogress }) {
    return (
        <div>
            <p>{todo}</p> 
        </div>
    )
}
