import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { db } from './firebase_config.js';
import firebase from 'firebase';
import TodoListItem from './Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, [])

  const getTodos = () => {
    db.collection("todos").onSnapshot(function (querySnapshot) {
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
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");

  }

  return (
    <div 
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyDirection: "center",
        alignItems: "center",
      }}
    >

    <div>
      <h1>My Budget App</h1>
      <input 
        type="text"
        placeholder="Write a todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        style={{ maxWidth: "300px", width: "90vw"}}
      />
      <input type="button" onClick={addTodo} value="Default" />

      {todos.map((todo) => (
        <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id} />
      ))}

      </div>
    </div>
  );
}

export default App;
