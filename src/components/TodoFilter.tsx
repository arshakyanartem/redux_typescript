import React from 'react';
import {onChange} from "../store/action-creators/todos";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";

const TodoFilter = () => {
    const {filter} = useTypedSelector(state => state.todoReducer)
    const dispatch = useDispatch()
    return (
        <div>
            <input
                type="text"
                className={"todoList__input"}
                placeholder={"Enter search query..."}
                value={filter}
                onChange={ev => dispatch(onChange(ev.currentTarget.value))}
            />
        </div>
    );
};

export default TodoFilter;