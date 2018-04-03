import React from 'react';

import { List, ListItem, Button } from 'react-native-elements';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Overlay from 'react-native-modal-overlay';

import styles from './taskRegular.styles';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../../../actions'; //Import your actions

const TaskRegular = (props) => {
    const {
        task,
        _index,
        Tasks
    } = props;

    const Istyle = () => {
        if(task.importance==0){
            return <View style={styles.importance_1}/>  
        }
        else if(task.importance==1){
            return <View style={styles.importance_2}/>
        }
        else if(task.importance==2){
            return <View style={styles.importance_3}/>
        }
        else return <View /> 
    }

    function handleTaskPress(){
        const 
            newTask = {taskName: Tasks[this.index].taskName,
            importance: Tasks[this.index].importance,
            active: !Tasks[this.index].active,
        }
        return props.toggleTask([newTask ,this.index]);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={handleTaskPress}
                index={_index}
                style={ styles.taskBody } 
            >
                <View >
                    <View>
                        <Text  
                            style={styles.text} >
                            {task.taskName}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.indicatorBody} >
                <Istyle />
            </View>
        </View>
    )
}

function mapStateToProps(state, props) {
    return {
        taskIndex: state.tasksReducer.taskIndex,
        Tasks: state.tasksReducer.tasks,
        
        removeTaskPageOpen: state.tasksReducer.removeTaskPageOpen,
        finishedTaskPageOpen: state.tasksReducer.finishedTaskPageOpen,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskRegular);