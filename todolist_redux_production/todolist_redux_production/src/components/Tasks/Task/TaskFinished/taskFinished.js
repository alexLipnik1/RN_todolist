import React from 'react';

import likePic from '../../../../../assets/images/like.png'

import { List, ListItem, Button } from 'react-native-elements';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Overlay from 'react-native-modal-overlay';

import styles from './taskFinished.style';

export default TaskRegular = (props) => {
    const {
        task,
        _index,
        Tasks
    } = props;


    return (
        <View style={styles.container}>
            <TouchableOpacity 
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
                <View style={styles.indicator}>
                    <Image
                        style={{width: 45, height: 45}}
                        source={likePic}
                    />
                </View>
            </View>
        </View>
    )
}