import React from 'react';
import { useState } from "react";

import logo from './logo.svg';
import './App.css';

// https://reactjs.org/docs/hooks-intro.html

function RenderUrgency({ urgency }) {
  return (
    <div>
      {{
        HIGH: <p style={{ color: 'red' }}>{urgency}</p>,
        MEDIUM: <p style={{ color: 'orange' }}>{urgency}</p>,
        LOW: <p style={{ color: 'blue' }}>{urgency}</p>,
      }[urgency] || <p>-</p>}

    </div>
  );
}

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <tr>
        <td>
          {todo.text}
        </td>
        <td>
          <RenderUrgency urgency={todo.urgency} />
        </td>
        <td>
          <div>
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => removeTodo(index)}>x</button>
          </div>
        </td>
      </tr>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [valueUrgency, setValueUrgency] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    // If empty return don'add
    if (!value) {
      return;
    }
    addTodo(value, false, valueUrgency);

    setValue("");
    setValueUrgency(valueUrgency);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="todo">
        <br />
        <label >Enter New TODO: </label>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />

        <label >Urgency</label>
        <select defaultValue="-" onChange={e => setValueUrgency(e.target.value)}  >
          <option value="" >-</option>
          <option value="HIGH" >HIGH</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="LOW" >LOW</option>
        </select>

        <button>Save</button>

      </div>
    </form>
  );
}

function App() {


  const [todos, setTodos] = useState([
    { text: "Review AWS Honeycode", isCompleted: false, urgency: "HIGH" },
    { text: "Review AWS Amplify", isCompleted: false, urgency: "MEDIUM" },
    { text: "Review AWS Solutions Constructs", isCompleted: false, urgency: "LOW" },
  ]);


  // we'll render our todos here ...
  // return <div></div>

  const addTodo = (text, isCompleted, urgency) => {
    const newTodos = [...todos, { text, isCompleted, urgency, }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Track your TODOs</h4>
        {/* https://reactjs.org/docs/lists-and-keys.htm */}

      </header>

      <div className="todo-list">

        <TodoForm addTodo={addTodo} />

        <table style={{ 'border-spacing': '2px' }}>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </table>

      </div>


    </div>
  );
}

export default App;
