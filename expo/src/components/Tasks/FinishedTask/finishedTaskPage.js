import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './finishedTaskPage.style';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../../../actions'; //Import your actions

const finished = (props) => {

    return (
        <View style={styles.container} >
            <Image
                style={{width: 250, height: 240}}
                source={{uri:
                     'https://st2.depositphotos.com/4966263/7336/v/950/depositphotos_73364241-stock-illustration-you-are-amazing-hand-drawn.jpg'
                }}
            />
            <Button textStyle={styles.textStyle}
                    buttonStyle={styles.buttonStyle}
                    title='Submit' 
                    onPress={() => props.toggleFinishedTaskPage()}
            />
        </View>
    )
}


function mapStateToProps(state, props) {
    return {
        AddTaskPageOpen: state.tasksReducer.AddTaskPageOpen,
        tasks: state.tasksReducer.tasks,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(finished);