import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    authPage: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;