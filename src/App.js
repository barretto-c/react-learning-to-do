import React from 'react';
import { useState } from "react";

import logo from './logo.svg';
import './App.css';

// https://reactjs.org/docs/hooks-intro.html

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

function App() {

  const [todos, setTodos] = useState([
    { text: "Review AWS Honeycode" },
    { text: "Review AWS Amplify" },
    { text: "Review AWS Solutions Constructs" },
  ]);

  // we'll render our todos here ...
  // return <div></div>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>

        {/* https://reactjs.org/docs/lists-and-keys.htm */}
        
      </header>

      <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
            />
          ))}
      </div>

    </div>
  );
}


export default App;
