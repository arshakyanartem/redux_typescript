import {TodoAction, TodoState} from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    filter: '',
    newTask: '',
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case "FETCH_TODO":
            return {...state, loading: true}
        case "FETCH_TODO_SUCCESS":
            return {...state, loading: false, todos: action.payload}
        case "FETCH_TODO_ERROR":
            return {...state, loading: false, error: action.payload}
        case "SET_TODO_PAGE":
            return {...state, page: action.payload}
        case "SET_FILTER":
            return {...state, filter: action.payload}
        case "NEW_TASK":
            return {...state, newTask: action.payload }
        case "ADD_TASK":
            return {...state, todos: [...state.todos, action.payload]}
        default:
            return state
    }
}