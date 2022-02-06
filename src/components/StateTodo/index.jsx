import React, { useState } from 'react';

const StateTodo = () => {
    const [todoList, setTodoList] = useState([
        { id: 1, todo: '發紅包', done: false, isEdit: false }
    ]);

    return (
        <>
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="輸入待辦事項" />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary" >儲存</button>
                    </div>
                </div>
            </form>
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
                        <tr>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <p>發紅包</p>
                                <input type="text" className='form-control' value="發紅包" />
                            </td>
                            <td>
                                <button type='button' className='btn btn-outline-danger mr-2'>刪除</button>
                                <button type="button" className="btn btn-outline-primary mr-2" >修改</button>
                                <button type="button" className="btn btn-primary mr-2" >儲存</button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr class="table-danger">
                            <td colSpan={3}>
                                已經完成: 10, 總數: 20
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default StateTodo;
