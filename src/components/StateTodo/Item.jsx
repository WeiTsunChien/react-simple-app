import { useState } from 'react';

const Item = (props) => {
    const { id, todo, done, isEdit, setDone, setIsEdit, editTodo, deleteTodo } = props;
    const [editedTodo, setEditedTodo] = useState(todo);

    const onChangeDone = (event) => {
        setDone(id, event.target.checked);
    }

    return (
        <tr>
            <td>
                <input type="checkbox" checked={done} onChange={onChangeDone} />
            </td>
            <td>
                <p style={{ display: isEdit ? 'none' : 'block' }}>{todo}</p>
                <input type="text"
                    className='form-control'
                    style={{ display: isEdit ? 'block' : 'none' }}
                    value={editedTodo}
                    onChange={(event) => { setEditedTodo(event.target.value) }} />
            </td>
            <td>
                <button type="button"
                    className="btn btn-outline-primary mr-2"
                    style={{ display: isEdit ? 'none' : 'inline-block' }}
                    onClick={() => { setIsEdit(id, true) }}>
                    修改
                </button>
                <button type="button"
                    className="btn btn-primary mr-2"
                    style={{ display: isEdit ? 'inline-block' : 'none' }}
                    onClick={() => { editTodo(id, editedTodo) }}>
                    儲存
                </button>
                <button type='button'
                    className='btn btn-outline-danger mr-2'
                    onClick={() => { deleteTodo(id) }}>刪除</button>
            </td>
        </tr>
    );
};

export default Item;
