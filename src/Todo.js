import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { db } from './firebase_config'

export default function TodoListItem({ id, todo, inprogress }) {

    const toggleInProgress = () => {
        db.collection('todos').doc(id).update({
            inprogress: !inprogress
        })
    }

    const deleteTodo = () => {
        db.collection('todos').doc(id).delete();
    }

    return (
        <div style={{display: 'flex'}}>
            <ListItem>
                <ListItemText 
                    primary={todo} 
                    secondary={inprogress ? 'In Progress' : 'Completed'} 
                />
            </ListItem>

            <Button onClick={toggleInProgress}>{inprogress ? 'Done' : 'UnDone'}</Button>
            <Button onClick={deleteTodo}>X</Button>
        </div>
    )
}
