import { combineReducers } from 'redux';

import {dataReducer} from './test.reducer';
import {tasksReducer} from './tasksReducers/tasks.reducers';
 
// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer,
    tasksReducer,
})
 
export default rootReducer;