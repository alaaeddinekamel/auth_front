import AuthReducer from "./AuthReducer"
import {combineReducers} from 'redux'
import ErreurReducer from "./ErreurReducer"

const rootReducer = combineReducers({AuthReducer, ErreurReducer})

export default rootReducer