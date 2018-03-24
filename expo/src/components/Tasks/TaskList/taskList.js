import React, {Component} from 'react';

import { List, ListItem, Button } from 'react-native-elements';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Overlay from 'react-native-modal-overlay';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import RemoveTaskPage from '../RemoveTask/removeTask';
import Task from '../Task/task';
import FinishedTaskPage from '../FinishedTask/finishedTaskPage';
import styles from './taskList.style';


import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../../actions'; //Import your actions

const _List = (props) => {
    const {
        Tasks,
        changeTaskIndex,
        _changeTaskIndex,
        taskIndex,
        lastActiveIndex,
        toggleTask,
        removeTask,
        toggleFinishedTaskPage,
        finishedTaskPage,
        removeTaskPage,
        toggleRemoveTaskPage,
        finishedTaskOverlay
    } = props; 

    return (
    <ScrollView  >
        <Overlay visible={finishedTaskOverlay}
            animationType="zoomIn"
            animationDuration={500} >
            <FinishedTaskPage toggleFinishedTaskPage={() => toggleFinishedTaskPage()}/>
        </Overlay>
        <Overlay visible={removeTaskPage}
            animationType="zoomIn"
            animationDuration={500} >
            <RemoveTaskPage taskIndex={taskIndex} removeTask={removeTask} toggleRemoveTaskPage={() =>{ toggleRemoveTaskPage(), console.log(taskIndex, 'list')}}/>
        </Overlay>
        <List >{
            Tasks.map((l, i) => (
                <GestureRecognizer 
                    key={i}            
                    onSwipeLeft={(state)=> {changeTaskIndex(state, i)}}//handleRemove(state, i)}
                >
                    <Task
                        key={i}
                        task={l}
                        _index={i}
                        toggleTask={toggleTask}
                        finishedTaskPage={finishedTaskPage}
                        Tasks={Tasks}
                    />    
                </GestureRecognizer>
            ))}
        </List>  
    </ScrollView>
)}


function mapStateToProps(state, props) {
    return {
        Tasks: state.tasksReducer.tasks,
        removeTaskPageOpen: state.tasksReducer.removeTaskPageOpen,
        finishedTaskPageOpen: state.tasksReducer.finishedTaskPageOpen,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(_List);