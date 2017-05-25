import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import AddItemScreen from '../screens/AddItemScreen';
import MyItemsScreen from '../screens/MyItemsScreen';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={{ backgroundColor: '#FFFFFF', marginTop: 10 }}>
      <Scene key='main' direction='leftToRight' >
        <Scene key='MyItems' component={ MyItemsScreen } title="My Items" initial />
      </Scene>
      <Scene key='add' direction='vertical'>
        <Scene key='AddItem'  onLeft={() => Actions.main() } title="Add Item" leftTitle='Back' component={ AddItemScreen } />
      </Scene>
    </Router>
  )
}

export default RouterComponent;
