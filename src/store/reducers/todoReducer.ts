import {TodoAction, TodoState} from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case "FETCH_TODOS":
            return {...state, loading: true}
        case "FETCH_TODOS_SUCCESS":
            return {...state, loading: false, todos: action.payload}
        case "FETCH_TODOS_ERROR":
            return {...state, loading: false, error: action.payload}
        case "SET_TODO_PAGE":
            return {...state, page: action.payload}
        default:
            return state
    }
}