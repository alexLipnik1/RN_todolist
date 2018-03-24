export const TOGGLE_ADD_TASK_PAGE = 'TOGGLE_ADD_TASK_PAGE';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const TOGGLE_FINISHED_TASK_PAGE = 'TOGGLE_FINISHED_TASK_PAGE';
export const TOGGLE_REMOVE_TASK_PAGE = 'TOGGLE_REMOVE_TASK_PAGE';

export function toggleAddTaskPage(){
    return (dispatch) => {
        console.log('action')
        dispatch({type: TOGGLE_ADD_TASK_PAGE})
    }
} 

export function toggleRemoveTaskPage(){
    return (dispatch) => {
        console.log('action')
        dispatch({type: TOGGLE_REMOVE_TASK_PAGE})
    }
} 


export function toggleFinishedTaskPage(){
    return (dispatch) => {
        console.log('action')
        dispatch({type: TOGGLE_FINISHED_TASK_PAGE})
    }
} 

export function toggleTask(){
    return (dispatch) => {
        console.log('action')
        dispatch({type: TOGGLE_TASK})
    }
} 