export const TOGGLE_ADD_TASK_PAGE = 'TOGGLE_ADD_TASK_PAGE';

// export const taskActions = {
//     toggleAddTaskPage,
// } 

export function toggleAddTaskPage(){
    return (dispatch) => {
        console.log('action')
        dispatch({type: TOGGLE_ADD_TASK_PAGE})
    }
} 