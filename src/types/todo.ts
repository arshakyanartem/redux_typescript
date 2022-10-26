export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

interface fetchTodoAction {
    type: "FETCH_TODOS";
}
interface fetchTodoSuccessAction {
    type: "FETCH_TODOS_SUCCESS";
    payload: any[];
}
interface fetchTodoErrorAction {
    type: "FETCH_TODOS_ERROR";
    payload: string;
}

interface setTodoPage {
    type: "SET_TODO_PAGE";
    payload: number;
}

export type TodoAction = fetchTodoAction | fetchTodoSuccessAction | fetchTodoErrorAction | setTodoPage