import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, setTodos, toggleComplete } from './actions';

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [newTodo, setNewTodo] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://dummyjson.com/todos");
        const res = await data.json();
        // const randNum = Math.floor(Math.random()*res.todos.length)
        const slicedRes = res.todos.slice(0, 10);
        console.log(slicedRes);
        dispatch(setTodos(slicedRes)); // Set only the 'todos' array to the state
      } catch (error) {
        console.error('Error setting todos:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const todo = {
        id: Date.now(),
        todo: newTodo,
        completed: false, // Set completed to false for new todos
      };
      dispatch(addTodo(todo));
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (id) => {
    console.log(id)
    dispatch(toggleComplete(id));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Todo App</h1>
      <div className='head'>
        <div>
          <input
            type="text"
            placeholder="Enter a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={handleAddTodo} className='add__btn'>Todo</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search todos"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <ul className='todo__list'>
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            // className={`todo__list--item ${todo.completed ? 'completed' : ''}`}
            className="todo__list--item"
            onClick={() => handleToggleComplete(todo.id)} // Toggle completion on click
          >
            <p className={`${todo.completed ? 'completed' : ''}`} style={{margin:0}}>{todo.todo}</p>
            <button onClick={() => handleDeleteTodo(todo.id)} className='delete__btn'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
