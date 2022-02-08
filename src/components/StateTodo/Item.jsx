import { useState } from 'react';

const Item = (props) => {
    const { id, title, done, isEdit, updateTodo, deleteTodo } = props;
    const [editedTitle, setEditedTitle] = useState(title);

    return (
        <tr>
            <td>
                <input type="checkbox" checked={done} onChange={(event) => { updateTodo(id, 'done', event.target.checked) }} />
            </td>
            <td>
                <p style={{ display: isEdit ? 'none' : 'block' }}>{title}</p>
                <input type="text"
                    className='form-control'
                    style={{ display: isEdit ? 'block' : 'none' }}
                    value={editedTitle}
                    onChange={(event) => { setEditedTitle(event.target.value) }} />
            </td>
            <td>
                <button type="button"
                    className="btn btn-outline-primary mr-2"
                    style={{ display: isEdit ? 'none' : 'inline-block' }}
                    onClick={() => { updateTodo(id, 'isEdit', true) }}>
                    修改
                </button>
                <button type="button"
                    className="btn btn-primary mr-2"
                    style={{ display: isEdit ? 'inline-block' : 'none' }}
                    onClick={() => { updateTodo(id, 'title', editedTitle) }}>
                    儲存
                </button>
                <button type="button"
                    className="btn btn-outline-primary mr-2"
                    style={{ display: isEdit ? 'inline-block' : 'none' }}
                    onClick={() => { updateTodo(id, 'isEdit', false) }}>
                    取消
                </button>
                <button type='button'
                    className='btn btn-outline-danger mr-2'
                    onClick={() => { deleteTodo(id) }}>刪除</button>
            </td>
        </tr>
    );
};

export default Item;
