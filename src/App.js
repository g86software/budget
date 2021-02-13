import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { db } from './firebase_config.js';
import firebase from 'firebase';

function App() {

  const [todoInput, setTodoInput] = useState("")

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });



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
      </div>
    </div>
  );
}

export default App;
