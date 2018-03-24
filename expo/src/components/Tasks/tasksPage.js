import React from 'react';

import {AsyncStorage, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Overlay from 'react-native-modal-overlay';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import update from 'immutability-helper';

import styles from './tasksPage.style'
import AddTaskPage from './AddTask/addTaskPage';
import List from './TaskList/taskList.js';


import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../actions'; //Import your actions

class TasksPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // addTaskPageOpen: false,
            taskIndex: 0,                        
            newTaskImportance: 0,
            newTaskName: '',
        }
    }

    // componentDidMount() {
    //     AsyncStorage.getItem("state").then((value)=> {
    //         this.setState(JSON.parse(value));
    //     });
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log(nextState, 'componentWillupdate');
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(this.state !== prevState) {
    //         // console.log('add',JSON.stringify(this.state))
    //         AsyncStorage.setItem("state", JSON.stringify(this.state));
    //     }
    // }

    changeTaskIndex = (state, i) => {
        console.log('change', i)
        this.setState({
            ...this.state,
            taskIndex: i,
            removeTaskPageOpen: !this.state.removeTaskPageOpen
        })
    }

    toggleTask = (props) => {
        const updateTask = this.state.tasks.map((obj, index) => {
            return index === props[1] ? props[0] : obj;
        });
        this.setState({
            ...this.state,
            tasks: updateTask,
        })
    }

    toggleRemoveTaskPage = (props) => {
        this.setState({
            ...this.state,
            // removeTaskPageOpen: !this.state.removeTaskPageOpen,
        })
    }

    changeImportance = (num) => {
        this.setState({
            ...this.state,
            newTaskImportance: num 
        })
    }

    changeTaskName = (_newTaskName) => {
        this.setState({
            ...this.state,
            newTaskName: _newTaskName
        })
    }

    finishedTaskPage = (props) => {
        const updateTask = this.state.tasks.map((obj, index) => {
            return index === props[1] ? props[0] : obj;
        });
        this.setState({
            ...this.state,
            tasks: updateTask,
            finishedTaskPageOpen: !this.state.finishedTaskPageOpen,
        })
    }

    removeTask = (i) => {
        console.log(i, 'remove')
        const arr = [
            ...this.state.tasks.slice(0, i),
            ...this.state.tasks.slice(i+1)
        ]
        this.setState({
            tasks: arr,
            removeTaskPageOpen: !this.state.removeTaskPageOpen,
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <List 
                    taskIndex={this.state.taskIndex}
                    _changeTaskIndex={this._changeTaskIndex}
                    changeTaskIndex={this.changeTaskIndex}
                    removeTask={this.removeTask}
                    removeTaskPage= {this.props.removeTaskPageOpen}
                    lastActiveIndex = {this.state.lastActiveIndex}
                    finishedTaskPage={this.finishedTaskPage}
                    toggleFinishedTaskPage={this.toggleFinishedTaskPage}
                    toggleRemoveTaskPage={this.toggleRemoveTaskPage}
                    toggleTask={this.toggleTask}
                    finishedTaskOverlay={this.props.finishedTaskPageOpen}
                />

                <View style={styles.buttonContainer}>
                    <Button textStyle={styles.textStyle}
                            buttonStyle={styles.buttonStyle}
                            title='Add Task' onPress={this.props.toggleAddTaskPage}
                    />
                </View>

                <Overlay visible={this.props.AddTaskPageOpen}
                    closeOnTouchOutside animationType="zoomIn"
                    containerStyle={styles.containerStyle}
                    childrenWrapperStyle={styles.childrenWrapperStyle}
                    animationDuration={500}>
                    <AddTaskPage 
                        changeTaskName={this.changeTaskName}
                        newTaskName={this.state.newTaskName}
                        changeImportance={this.changeImportance}
                        // addTesk={this.addTesk}
                        newTaskImportance={this.state.newTaskImportance}
                    />
                </Overlay>
            </View>
        )
    }

}

function mapStateToProps(state, props) {
    return {
        AddTaskPageOpen: state.tasksReducer.AddTaskPageOpen,
        tasks: state.tasksReducer.tasks,
        removeTaskPageOpen: state.tasksReducer.removeTaskPageOpen,
        finishedTaskPageOpen: state.tasksReducer.finishedTaskPageOpen,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);