import React from 'react';
import Item from './Item';

const List = (props) => {
    const { todos, updateTodo, deleteTodo } = props;

    //array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    const doneCount = todos.reduce((count, todo) => {
        return todo.done ? count + 1 : count;
    }, 0);

    return (
        <div className="table-responsive-sm">
            <table className="table table-bordered">
                <thead>
                    <tr className="table-primary">
                        <th>是否完成</th>
                        <th>事項</th>
                        <th>功能</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo) => {
                            return (
                                <Item key={todo.id}
                                    {...todo}
                                    updateTodo={updateTodo}
                                    deleteTodo={deleteTodo} />
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr className="table-danger">
                        <td colSpan={3}>
                            已經完成: {doneCount}, 總數: {todos.length}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default List;
