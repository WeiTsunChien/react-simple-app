import { useState } from 'react';
import { nanoid } from 'nanoid'

const AddTodo = (props) => {
    const { addTodo } = props;
    const [todo, setTodo] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        if (!todo) {
            alert('請填寫事項');
            return;
        }

        const todoObj = {
            id: nanoid(),
            todo: todo,
            done: false,
            isEdit: false
        }

        addTodo(todoObj);
        setTodo('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="input-group mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="輸入待辦事項"
                    value={todo}
                    onChange={(event) => { setTodo(event.target.value) }} />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary" >儲存</button>
                </div>
            </div>
        </form>
    );
};

export default AddTodo;
