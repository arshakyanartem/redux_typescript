import React, {useEffect, useMemo} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchTodos, setTodoPage} from "../store/action-creators/todos";
import './todoList.css';

const TodoList = () => {
    const {todos, loading, page, limit, error, filter} = useTypedSelector(state => state.todoReducer)
    const dispatch = useDispatch()
    const pages = [1, 2, 3, 4, 5]
    const searchedPosts = useMemo(() => {
        if (filter) {
            return [...todos].filter(item => item.title.toLowerCase().includes(filter.toLowerCase()))
        }
        return todos
    }, [filter, page, todos])
    useEffect(() => {
        // @ts-ignore
        dispatch(fetchTodos(page, limit))
    }, [page])
    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>Error...</h2>
    }

    return (
        <div>
            {
                filter
                    ?
                    searchedPosts.map(item =>
                        <div key={item.id}>{item.id}. - {item.title}</div>
                    )
                    :
                    todos.map(item =>
                        <div key={item.id}>{item.id}. - {item.title}</div>
                    )
            }
            <div className={"pagesWrap"}>
                {
                    pages.map(item =>
                        <div key={item}
                             className={item === page ? "page active" : "page"}
                             onClick={() => dispatch(setTodoPage(item))}
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