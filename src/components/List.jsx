import React from 'react';
import { useState } from 'react';
import Form from './Form';
import Todo from './Todo';

function List() {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)) return;

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })

        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <Form onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo}/>
        </div>
    )
}

export default List