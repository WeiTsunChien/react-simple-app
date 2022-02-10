import { useState, useEffect, useRef } from 'react';

const Item = (props) => {
    const { id, title, done, isEditMode, updateTodo, deleteTodo } = props;
    const [editedTitle, setEditedTitle] = useState(title);
    const refTitle = useRef();

    useEffect(() => {
        if (isEditMode) {
            refTitle.current.focus();
        }
    }, [isEditMode]);

    return (
        <tr>
            <td>
                <input type="checkbox" checked={done} onChange={(event) => { updateTodo(id, 'done', event.target.checked) }} />
            </td>
            <td>
                <p style={{ display: isEditMode ? 'none' : 'block' }}>{title}</p>
                <input type="text"
                    className='form-control'
                    style={{ display: isEditMode ? 'block' : 'none' }}
                    value={editedTitle}
                    ref={refTitle}
                    onChange={(event) => { setEditedTitle(event.target.value) }} />
            </td>
            <td>
                <button type="button"
                    className="btn btn-outline-primary mr-2"
                    style={{ display: isEditMode ? 'none' : 'inline-block' }}
                    onClick={() => { updateTodo(id, 'isEditMode', true) }}>
                    修改
                </button>
                <button type="button"
                    className="btn btn-primary mr-2"
                    style={{ display: isEditMode ? 'inline-block' : 'none' }}
                    onClick={() => { updateTodo(id, 'title', editedTitle) }}>
                    儲存
                </button>
                <button type="button"
                    className="btn btn-outline-primary mr-2"
                    style={{ display: isEditMode ? 'inline-block' : 'none' }}
                    onClick={() => { updateTodo(id, 'isEditMode', false) }}>
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
