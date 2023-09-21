import {combineReducers} from 'redux'
import notesReducer from './noteReducer'
import loadingReducer from './loadingReducer'


let rootReducers = combineReducers({
    notesReducer,
    loadingReducer 
})


export default rootReducers