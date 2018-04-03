import React, {Component} from 'react';
import { View, TouchableOpacity,  Text, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import index from 'react-native-modal-overlay';


import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../../actions'; //Import your actions


const removeTaskPage = (props) => {
    const {
        taskIndex
    }= props;

    return(
    <View style={{alignItems: 'center'}}>
        <Text style={{padding: 20, fontSize: 21, fontWeight: 'bold'}}>
            Are you sure you want to remove this task ?
        </Text>
        <View style={{flexDirection: 'row'}}>
            <Button 
                textStyle={{fontSize: 17, fontWeight: 'bold'}}                
                buttonStyle={{
                    width: 120,
                    backgroundColor: '#ff1a1a',
                    borderRadius: 2,
                    marginRight: -10,
                }} 
                onPress={()=>{props.removeTask(props.taskIndex)}}
                title="Yes" />
            <Button 
                textStyle={{fontSize: 17, fontWeight: 'bold'}}
                buttonStyle={{
                    width: 120,
                    backgroundColor: '#999999',
                    borderRadius: 2,          
                    marginLeft: -10,
                }} 
                onPress={props.toggleRemoveTaskPage} 
                title="No" />
        </View>
    </View>
)}


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

export default connect(mapStateToProps, mapDispatchToProps)(removeTaskPage);
