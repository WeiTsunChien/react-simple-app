import React, { useState } from 'react';
import AddTodo from './AddTodo';
import List from './List';

const StateTodo = () => {
    const [todoList, setTodoList] = useState([
        { id: 1, todo: '發紅包', done: false, isEdit: false },
        { id: 2, todo: '打掃', done: false, isEdit: false },
        { id: 3, todo: '煮飯', done: false, isEdit: false }
    ]);

    const addTodo = (todoObj) => {
        setTodoList([todoObj, ...todoList]);
    }

    const setDone = (id, done) => {
        const list = todoList.map((todoObj) => {
            if (todoObj.id == id) {
                todoObj.done = done;
            }
            return todoObj;
        });

        setTodoList(list);
    }

    const setIsEdit = (id, isEdit) => {
        const list = todoList.map((todoObj) => {
            if (todoObj.id == id) {
                todoObj.isEdit = isEdit;
            }
            return todoObj;
        });

        setTodoList(list);
    }

    const editTodo = (id, todo) => {
        if (!todo) {
            alert('請填寫事項');
            return;
        }

        const list = todoList.map((todoObj) => {
            if (todoObj.id == id) {
                todoObj.todo = todo;
                todoObj.isEdit = false;
            }
            return todoObj;
        });

        setTodoList(list);
    }

    const deleteTodo = (id) => {
        if (window.confirm('確定刪除？')) {
            const list = todoList.filter(x => x.id != id);
            setTodoList(list);
        }
    }

    return (
        <>
            <AddTodo addTodo={addTodo} />
            <List todoList={todoList}
                setDone={setDone}
                setIsEdit={setIsEdit}
                editTodo={editTodo}
                deleteTodo={deleteTodo} />
        </>
    );
};

export default StateTodo;
