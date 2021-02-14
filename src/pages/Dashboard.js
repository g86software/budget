import React from 'react'
import { useState, useEffect } from 'react';
import {app, db} from '../base.js';
import firebase from 'firebase';
import TodoListItem from '../Todo';
import { Button, TextField } from '@material-ui/core';
import { AuthProvider } from '../Auth';

function Dashboard() {

    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState("");
  
    useEffect(() => {
      getTodos();
    }, [])
  
    const getTodos = () => {
    db.collection("todos").where("uid", "==", app.auth().currentUser.uid)
        .onSnapshot(function (querySnapshot) {
        setTodos(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            inprogress: doc.data().inprogress
          }))
        );
      })
    }
  
    const addTodo = (e) => {
      e.preventDefault();
  
      db.collection("todos").add({
        uid: app.auth().currentUser.uid,
        inprogress: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        todo: todoInput,
      });
  
      setTodoInput("");
  
    }

    return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyDirection: "center",
            alignItems: "center",
            width: '100%'
          }}
        >
        <form>
          <TextField
            id="standard-basic"
            label="Write a Todo"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            style={{width: '90vw', maxWidth: '500px'}}
          />

          <Button
            type="submit"
            variant="contained"
            onClick={addTodo}
            style={{display: 'none'}}
          >Default</Button>
          </form>

          <div style={{width: '90vw', maxWidth: '500px', marginTop: '24px'}}>
            {todos.map((todo) => (
              <TodoListItem key={todo.id} todo={todo.todo} inprogress={todo.inprogress} id={todo.id} />
            ))}
          </div>

        </div>
    )
}

export default Dashboard
