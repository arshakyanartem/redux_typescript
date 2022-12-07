import {Dispatch} from "redux";
import {TodoAction, TodoState} from "../../types/todo";
import axios from "axios";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: "FETCH_TODO"})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            dispatch({type: "FETCH_TODO_SUCCESS", payload: response.data})
        }
        catch (e) {
            dispatch({type: "FETCH_TODO_ERROR", payload: "You have an error in fetch Todos!"})
        }
    }
}

export const setTodoPage = (page: number): TodoAction => {
    return {type: "SET_TODO_PAGE", payload: page}
}

export const onChange = (typedTitle: string): TodoAction => {
    return {type: "SET_FILTER", payload: typedTitle}
}

export const saveNewTask = (newTask: string): TodoAction => {
    return {type: "NEW_TASK", payload: newTask}
}

export const addTask = (newObj: object): TodoAction => {
    return {type: "ADD_TASK", payload: newObj}
}
