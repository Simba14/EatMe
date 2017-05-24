import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import AddItemScreen from '../screens/AddItemScreen';
import MyItemsScreen from '../screens/MyItemsScreen';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 20}}>
      <Scene key='main' hideNavBar='true' >
        <Scene key='MyItems' component={ MyItemsScreen } initial />
      </Scene>
      <Scene key='add'>
        <Scene key='AddItem' onLeft={() => Actions.main() }leftTitle='My Items' component={ AddItemScreen } />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
