export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
    filter: string;
    newTask: string;
}

interface todoAction {
    type: "FETCH_TODO";
}
interface todoSuccessAction {
    type: "FETCH_TODO_SUCCESS";
    payload: any[];
}
interface todoErrorAction {
    type: "FETCH_TODO_ERROR";
    payload: string;
}
interface setTodoPage {
    type: "SET_TODO_PAGE";
    payload: number;
}

interface setFilter {
    type: "SET_FILTER";
    payload: string;
}

interface newTask {
    type: "NEW_TASK";
    payload: string;
}

interface addTask {
    type: "ADD_TASK";
    payload: object;
}

export type TodoAction = todoAction | todoSuccessAction | todoErrorAction | setTodoPage | setFilter | newTask | addTask