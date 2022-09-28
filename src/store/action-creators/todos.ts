import {Dispatch} from "redux";
import {TodoAction} from "../../types/todo";
import axios from "axios";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: "FETCH_TODO"})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos',
                {
                    params: {_page: page, _limit: limit}
                })
            setTimeout(() => {
                dispatch({type: "FETCH_TODO_SUCCESS", payload: response.data})
            }, 1000)

        }
        catch (e) {
            dispatch({type: "FETCH_TODO_ERROR", payload: "You have an error on todos!"})
        }
    }
}

export const setTodoPage = (page: number):TodoAction => {
    return {type: "SET_TODO_PAGE", payload: page}
}