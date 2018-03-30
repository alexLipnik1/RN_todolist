import React from 'react';

import { List, ListItem, Button } from 'react-native-elements';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Overlay from 'react-native-modal-overlay';

import TaskActive from './TaskActive/taskActive';
import TaskRegular from './TaskRegular/taskRegular';
import TaskFinished from './TaskFinished/taskFinished';
import styles from './task.styles';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../../actions'; //Import your actions

const Task = (props) => {
    const {
        task,
        _index,
        toggleTask,
        finishedTaskPage,
        Tasks
    } = props;

    const TaskStyle = () => {
        if(task.finished){
            return(
                <TaskFinished 
                    task={task}
                    _index={_index}
                />
            )
        }
        else{
            if(task.active){
                return(
                    <TaskActive
                        task={task}
                        _index={_index}
                    />
                )
            }
            if(!task.active){
                return(
                    <TaskRegular 
                        task={task}
                        _index={_index}
                    />
                )
            }
        }
    }

    return (
        <TaskStyle />
    )
}

function mapStateToProps(state, props) {
    return {
        AddTaskPageOpen: state.tasksReducer.AddTaskPageOpen,
        Tasks: state.tasksReducer.tasks,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);