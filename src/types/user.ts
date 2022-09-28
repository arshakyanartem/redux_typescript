export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

interface fetchUsersAction {
    type: "FETCH_USERS"
}
interface fetchUsersSuccessAction {
    type: "FETCH_USERS_SUCCESS";
    payload: any[];

}
interface fetchUsersErrorAction {
    type: "FETCH_USERS_ERROR";
    payload: null | string;
}

export type UserAction = fetchUsersAction | fetchUsersSuccessAction | fetchUsersErrorAction