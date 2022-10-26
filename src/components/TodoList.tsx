import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchTodos, setTodoPage} from "../store/action-creators/todos";
import '../components/todoList.css';

const TodoList = () => {
    const {todos, page, limit, loading, error} = useTypedSelector(state => state.todoReducer)
    const dispatch = useDispatch()
    const pages = [1, 2, 3, 4, 5]
    useEffect(() => {
        // @ts-ignore
        dispatch(fetchTodos(page, limit))
    }, [page])
    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>You have an error!</h2>
    }
    return (
        <div>
            {
                todos.map(item =>
                    <div key={item.id}>{item.id} - {item.title}</div>
                )
            }
            <div className={"pagesWrap"}>
            {
                pages.map(item =>
                        <div
                            onClick={() => dispatch(setTodoPage(item))}
                            className={item === page ? "page active" : "page"}
                        >
                        {item}
                        </div>
                )
            }
            </div>
        </div>
    );
};

export default TodoList;