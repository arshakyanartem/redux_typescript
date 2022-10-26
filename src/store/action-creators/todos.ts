import {Dispatch} from "redux";
import {TodoAction} from "../../types/todo";
import axios from "axios";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: "FETCH_TODOS"})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, limit: limit}
            })
            setTimeout(() => {
                dispatch({type: "FETCH_TODOS_SUCCESS", payload: response.data})
            }, 1500)
        }
        catch (e) {
            dispatch({type: "FETCH_TODOS_ERROR", payload: "You have an error in fetch Todos!"})
        }
    }
}

export const setTodoPage = (page: number):TodoAction => {
    return {type: "SET_TODO_PAGE", payload: page}
}