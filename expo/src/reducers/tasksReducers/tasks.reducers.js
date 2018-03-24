import { 
    TOGGLE_ADD_TASK_PAGE,
    TOGGLE_FINISHED_TASK_PAGE,
    TOGGLE_REMOVE_TASK_PAGE,
    TOGGLE_TASK,
    ADD_TASK,
    NEW_TASK_IMPORTANCE,
    NEW_TASK_NAME,
} from "../../actions/";
 
let initialState = { 
    tasks: [
        {taskName: 'value', importance: 1, active: false, finished: false}
    ],
    AddTaskPageOpen: false,
    finishedTaskPageOpen: false,
    removeTaskPageOpen: false,
    newTaskImportance: 0,
    newTaskName: '',
};
 
export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let obj = {taskName: action.taskName, importance: action.importance, active: false, finished: false};
            return {
                ...state,
                AddTaskPageOpen: !state.AddTaskPageOpen,
                tasks: [
                    ...state.tasks,
                    obj
                ]
            }
        case NEW_TASK_NAME:
            return {
                ...state,
                newTaskName: action.taskName
            }
        
        case NEW_TASK_IMPORTANCE:
            return {
                ...state,
                newTaskImportance: action.importance
        }
        case TOGGLE_ADD_TASK_PAGE:
            return {
                ...state,
                AddTaskPageOpen: !state.AddTaskPageOpen
            }
        case TOGGLE_REMOVE_TASK_PAGE:
            return {
                ...state,
                removeTaskPageOpen: !state.removeTaskPageOpen
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