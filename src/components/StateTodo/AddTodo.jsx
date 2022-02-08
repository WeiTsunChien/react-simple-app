import { useState } from 'react';
import { nanoid } from 'nanoid';

const AddTodo = (props) => {
    const { addTodo } = props;
    const [title, setTitle] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        if (!title) {
            alert('請填寫事項');
            return;
        }

        const todo = {
            id: nanoid(),
            title: title,
            done: false,
            isEdit: false
        }

        addTodo(todo);
        setTitle('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="input-group mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="輸入待辦事項"
                    value={title}
                    onChange={(event) => { setTitle(event.target.value) }} />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary" >儲存</button>
                </div>
            </div>
        </form>
    );
};

export default AddTodo;
