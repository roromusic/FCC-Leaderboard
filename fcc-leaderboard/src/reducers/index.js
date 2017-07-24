import { combineReducers } from 'redux'
import column from './column.js'
import users from './users.js'

const rootReducer = combineReducers({
    column,
    users
})

export default rootReducer