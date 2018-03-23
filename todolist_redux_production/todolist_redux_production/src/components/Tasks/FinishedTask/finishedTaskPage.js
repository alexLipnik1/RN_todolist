import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './finishedTaskPage.style';
import youAwesome from '../../../../assets/images/awesome.jpg'

export default finishedTaskPage = (props) => {
    const {toggleFinishedTaskPage} = props;

    return (
        <View style={styles.container} >
            <Image
                style={{width: 250, height: 240}}
                source={youAwesome}
            />
            <Button textStyle={styles.textStyle}
                    buttonStyle={styles.buttonStyle}
                    title='Submit' 
                    onPress={() => toggleFinishedTaskPage()}
            />
        </View>
    )
}