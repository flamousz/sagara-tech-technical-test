import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducers from "./reducer";
import thunk from 'redux-thunk'

let store = createStore( rootReducers, applyMiddleware(thunk))

export default store