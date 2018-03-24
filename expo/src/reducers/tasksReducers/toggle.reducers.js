import { 
    TOGGLE_ADD_TASK_PAGE,
    TOGGLE_FINISHED_TASK_PAGE,
    TOGGLE_TASK,
} from "../../actions/";
 
let initialState = { 
    tasks: [],
    AddTaskPageOpen: false,

};
 
export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ADD_TASK_PAGE:
            return {
                ...state,
                AddTaskPageOpen: !state.AddTaskPageOpen
            }
        case TOGGLE_FINISHED_TASK_PAGE:
            return {
                ...state,
                finishedTaskPageOpen: !state.finishedTaskPageOpen
            }
        default:
            return state;
    }
};