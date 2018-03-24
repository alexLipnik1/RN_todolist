export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const NEW_TASK_IMPORTANCE = 'NEW_TASK_IMPORTANCE';
export const NEW_TASK_NAME = 'NEW_TASK_NAME';
export const CHANGE_TASK_INDEX = 'CHANGE_TASK_INDEX';

export function addTask(newTaskName, newTaskImportance){
    return (dispatch) => {
        dispatch({type: ADD_TASK, taskName: newTaskName, importance: newTaskImportance})
    }
} 

export function removeTask(index){
    return (dispatch) => {
        dispatch({type: REMOVE_TASK, index: index})
    }
} 

export function changeTaskIndex(state, newIndex){
    return (dispatch) => {
        dispatch({type: CHANGE_TASK_INDEX, newIndex: newIndex})
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
