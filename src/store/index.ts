import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/userReducer";
import {todoReducer} from "./reducers/todoReducer";

const rootReducer = combineReducers({
    userReducer,
    todoReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>