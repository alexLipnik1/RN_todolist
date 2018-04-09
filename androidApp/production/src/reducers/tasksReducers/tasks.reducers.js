import { 
    TOGGLE_ADD_TASK_PAGE,
    TOGGLE_FINISHED_TASK_PAGE,
    TOGGLE_REMOVE_TASK_PAGE,
    TOGGLE_TASK,
    ADD_TASK,
    REMOVE_TASK,
    NEW_TASK_IMPORTANCE,
    NEW_TASK_NAME,
    CHANGE_TASK_INDEX,
    FINISHED_TASK_PAGE,
} from "../../actions/";
 
let initialState = { 
    tasks: [
        {
            taskName: 'value',
            importance: 1,
            active: false,
            finished: false
        }
    ],
    AddTaskPageOpen: false,
    finishedTaskPageOpen: false,
    removeTaskPageOpen: false,
    newTaskImportance: 0,
    newTaskName: '',
    taskIndex: 0,
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
        case REMOVE_TASK:
            const arr = [
                ...state.tasks.slice(0, action.index),
                ...state.tasks.slice(action.index+1)
            ]
            return {
                tasks: arr,
                removeTaskPageOpen: !state.removeTaskPageOpen,
            }
        case CHANGE_TASK_INDEX:
            return {
                ...state,
                removeTaskPageOpen: !state.removeTaskPageOpen,                
                taskIndex: action.newIndex,
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
        case TOGGLE_TASK:
            const updateTask = state.tasks.map((obj, index) => {
                return index === action.data[1] ? action.data[0] : obj;
            });
            return {
                ...state,
                tasks: updateTask,
            }
        case FINISHED_TASK_PAGE:
            const _updateTask = state.tasks.map((obj, index) => {
                return index === action.data[1] ? action.data[0] : obj;
            });
            console.log(action.data[0])
            return {
                ...state,
                tasks: _updateTask,
                finishedTaskPageOpen: !state.finishedTaskPageOpen,
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