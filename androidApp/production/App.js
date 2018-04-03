import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import HomePage from './src/components/HomePage/homePage.js';
import Tasks from './src/components/Tasks/tasksPage';

import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27
import { TabNavigator, TabBarBottom } from 'react-navigation'; // 1.0.0-beta.27

import setup from './src/store.js'; //Import the store


const Tab = TabNavigator({
  Home: { screen: HomePage },
  Tasks: { screen: Tasks },
  },

  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `star`;
        } else if (routeName === 'Tasks') {
          iconName = `tasks`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />
      },
    }),
    tabBarOptions:{
      activeTintColor: '#66ff66',
      inactiveTintColor: 'gray',
      style: {
        height: 55,
        marginTop: 0,
        paddingTop: 10,
        paddingBottom: 5,
        backgroundColor: '#00001a',
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,
  }
);


export default class App extends React.Component {

  render() {
    return (
      <Provider store={setup.store}>
        <PersistGate loading={null} persistor={setup.persistor}>
          <Tab />
        </PersistGate>  
      </Provider>
    );
  }
}
