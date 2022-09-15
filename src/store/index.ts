import {applyMiddleware, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/userReducer";

export const store = legacy_createStore({userReducer}, applyMiddleware(thunk))