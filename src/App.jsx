import { useState, useEffect } from 'react'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const editTodo = (id, updatedText, updatedCategory) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: updatedText, category: updatedCategory } : todo
    ));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  )
}

export default App
