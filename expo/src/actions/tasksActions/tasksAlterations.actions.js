export const ADD_TASK = 'ADD_TASK';
export const NEW_TASK_IMPORTANCE = 'NEW_TASK_IMPORTANCE';
export const NEW_TASK_NAME = 'NEW_TASK_NAME';

export function addTask(newTaskName, newTaskImportance){
    return (dispatch) => {
        dispatch({type: ADD_TASK, taskName: newTaskName, importance: newTaskImportance})
    }
} 

export function changeName(newTaskName){
    return (dispatch) => {
        dispatch({type: NEW_TASK_NAME, taskName: newTaskName})
    }
} 

export function changeImportance(newTaskImportance){
    return (dispatch) => {
        dispatch({type: NEW_TASK_IMPORTANCE, importance: newTaskImportance})
    }
} 
