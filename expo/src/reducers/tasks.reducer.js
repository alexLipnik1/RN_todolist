import { TOGGLE_ADD_TASK_PAGE } from "../actions/" //Import the actions types constant we defined in our actions
 
let initialState = { 

    AddTaskPageOpen: false
};
 
export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ADD_TASK_PAGE:
            // state = Object.assign({}, state, {AddTaskPageOpen: true });
            return {
                ...state,
                AddTaskPageOpen: !state.AddTaskPageOpen
            }
        default:
            return state;
    }
};