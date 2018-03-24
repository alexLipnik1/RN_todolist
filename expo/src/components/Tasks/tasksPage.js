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
        }
    }

    // componentDidMount() {
    //     AsyncStorage.getItem("state").then((value)=> {
    //         this.setState(JSON.parse(value));
    //     });
    // }

    componentWillUpdate(nextProps, nextState) {
        // console.log(this.props.tasks, 'componentWillupdate');
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(this.state !== prevState) {
    //         // console.log('add',JSON.stringify(this.state))
    //         AsyncStorage.setItem("state", JSON.stringify(this.state));
    //     }
    // }

    render(){
        return(
            <View style={styles.container}>
                <List />

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
                    <AddTaskPage />
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