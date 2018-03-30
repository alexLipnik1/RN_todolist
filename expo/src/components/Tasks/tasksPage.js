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
    //         this.props.storage(JSON.parse(value));
    //     });
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log(this.props.tasks, 'componentWillupdate');
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(this.props.state !== prevState) {
    //         store.subscribe(()=>{
    //             AsyncStorage.setItem("state", JSON.stringify(store.getState()));
    //         })
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
        state: state,
        AddTaskPageOpen: state.tasksReducer.AddTaskPageOpen,
        tasks: state.tasksReducer.tasks,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);