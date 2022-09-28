export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

interface FetchTodoAction {
    type: "FETCH_TODO"
}
interface FetchTodoSuccessAction {
    type: "FETCH_TODO_SUCCESS"
    payload: any[];
}
interface FetchTodoErrorAction {
    type: "FETCH_TODO_ERROR"
    payload: string;
}
interface SetTodoPage {
    type: "SET_TODO_PAGE"
    payload: number;
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPage

