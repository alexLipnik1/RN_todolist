import { combineReducers } from 'redux';

import {tasksReducer} from './tasksReducers/tasks.reducers';
 
// Combine all the reducers
const rootReducer = combineReducers({
    tasksReducer,
})
 
export default rootReducer;