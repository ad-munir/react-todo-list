
import './App.css'
import Form from './Form';
import TodoList from './TodoList';
import { useEffect, useState } from 'react'

function App() {

  const [todos, setTodos] = useState(() => {

    // get default value of todos state from local storage
    const localValue = localStorage.getItem("ITEMS");
    
    if(localValue == null)
      return [];

    return JSON.parse(localValue);
  });
  
  const [Id, setId] = useState(1);

  useEffect(() => {

    //store todo list items to local storage
    localStorage.setItem("ITEMS", JSON.stringify(todos))

    console.log(localStorage["ITEMS"]);
  }, [todos])

  const addTodo = (title) => {

    setId(prev => prev + 1);

    const todo = {
      id: Id,
      title,
      completed: false
    }

    setTodos(prev => [...prev, todo]);
  }

  // handle toggle checkbooxs
  const toggleTodo = (id, completed) => {
    setTodos(prev => {
      return prev.map(todo => {
        if (todo.id == id) {
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }

  // Handle Delete button
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id != id));
  }

  return (
    <>
      <Form addTodo={addTodo}/>
      <h2 className='heading'>Todo List</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App
