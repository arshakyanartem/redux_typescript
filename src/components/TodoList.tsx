import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchTodos} from "../store/action-creators/todos";

const TodoList = () => {
    const {todos, loading, limit, error, page} = useTypedSelector(state => state.todoReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(fetchTodos(page, limit))
    }, [])
    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>You have an error in todos fetch!</h2>
    }
    return (
        <div>
            {
                todos.map(item =>
                    <div key={item.id}>{item.id} - {item.title}</div>
                )
            }
        </div>
    );
};

export default TodoList;