import React, { useState } from 'react';
import AddTodo from './AddTodo';
import List from './List';

const StateTodo = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: '發紅包', done: false, isEditMode: false },
        { id: 2, title: '打掃', done: false, isEditMode: false },
        { id: 3, title: '煮飯', done: false, isEditMode: false }
    ]);

    const addTodo = (todo) => {
        setTodos([todo, ...todos]);
    }

    const updateTodo = (id, propName, value) => {
        if (propName == 'title' && !value) {
            alert('請填寫事項');
            return;
        }

        const list = todos.map((todo) => {
            if (todo.id == id) {
                todo[propName] = value;

                if (propName == 'title') {
                    todo.isEditMode = false;
                }
            }
            return todo;
        });

        setTodos(list);
    }

    const deleteTodo = (id) => {
        if (window.confirm('確定刪除？')) {
            const list = todos.filter(x => x.id != id);
            setTodos(list);
        }
    }

    return (
        <>
            <AddTodo addTodo={addTodo} />
            <List todos={todos}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo} />
        </>
    );
};

export default StateTodo;
