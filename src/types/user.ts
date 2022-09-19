export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

interface FetchUserAction {
    type: "FETCH_USERS";
}
interface FetchUserSuccessAction {
    type: "FETCH_USERS_SUCCESS";
    payload: any[];
}
interface FetchUserErrorAction {
    type: "FETCH_USERS_ERROR";
    payload: string;
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction


