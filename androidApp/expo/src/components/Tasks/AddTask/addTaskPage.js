import React, {Component} from 'react';
import { View, TouchableOpacity,  Text, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './addTaskPage.Style';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import index from 'react-native-modal-overlay';


import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../../actions'; //Import your actions

const AddTaskPage = (props) => {

    return (
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.header}>Add Task</Text>
                <Container style={{width: 250, height: 100, marginRight: 10}}>
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Task Name</Label>
                                <Input onChangeText={
                                    (value) => props.changeName(value)
                                }/>
                            </Item>
                    </Form>
                    </Content>
                </Container>
                <View style={styles.settingsContainer}>
                    <Text style={styles.settingHeader}>Importance</Text>
                    <View style={styles.importance}>
                        <TouchableOpacity 
                            style={ props.newTaskImportance ==0 ? styles.importance_1_active: styles.importance_1}
                            onPress={() => props.changeImportance(0)}
                        />
                        <TouchableOpacity 
                            style={ props.newTaskImportance==1 ? styles.importance_2_active: styles.importance_2}
                            onPress={() => props.changeImportance(1)}

                        />
                        <TouchableOpacity 
                            style={ props.newTaskImportance==2 ? styles.importance_3_active: styles.importance_3}
                            onPress={() => props.changeImportance(2)}

                        />
                    </View>
                </View>
                <Button textStyle={styles.textStyle}
                        buttonStyle={styles.buttonStyle}
                        title='Submit' onPress={() => props.addTask(props.newTaskName, props.newTaskImportance)}
                />
            </View>
        </ScrollView>
    )
}


function mapStateToProps(state, props) {
    return {
        AddTaskPageOpen: state.tasksReducer.AddTaskPageOpen,
        tasks: state.tasksReducer.tasks,
        newTaskImportance: state.tasksReducer.newTaskImportance,
        newTaskName: state.tasksReducer.newTaskName,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskPage);