export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

interface fetchUserAction {
    type: "FETCH_USERS";
}
interface fetchUserSuccessAction {
    type: "FETCH_USERS_SUCCESS";
    payload: any[];
}

interface fetchUserErrorAction {
    type: "FETCH_USERS_ERROR";
    payload: string;
}

export type UserAction = fetchUserAction | fetchUserSuccessAction | fetchUserErrorAction