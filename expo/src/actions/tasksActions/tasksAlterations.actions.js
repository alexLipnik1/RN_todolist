export const ADD_TASK = 'ADD_TASK';

export function addTask(newTaskName, newTaskImportance){
    return (dispatch) => {
        console.log('test')
        dispatch({type: ADD_TASK, taskName: newTaskName, importance: newTaskImportance})
    }
} 
