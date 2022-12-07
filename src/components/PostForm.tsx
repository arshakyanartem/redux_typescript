import React from 'react';
import './postForm.css';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {addTask, saveNewTask} from "../store/action-creators/todos";

const PostForm = () => {
    const {newTask} = useTypedSelector(state => state.todoReducer)
    const dispatch = useDispatch()
    const clickHandler = (ev: any) => {
        ev.preventDefault()
        const newObj = {
            id: Date.now(),
            title: newTask
        }
        dispatch(addTask(newObj))
    }
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder={"Enter a new task..."}
                    value={newTask}
                    onChange={ev => dispatch(saveNewTask(ev.currentTarget.value))}
                />
                <button
                    onClick={clickHandler}
                >
                    Add...
                </button>
            </form>
        </div>
    );
};

export default PostForm;