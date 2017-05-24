import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import AddItemScreen from '../screens/AddItemScreen';
import MyItemsScreen from '../screens/MyItemsScreen';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 20}}>
      <Scene key='MyItems' component={ MyItemsScreen } initial />
      <Scene key='AddItem' component={ AddItemScreen } />
    </Router>
  );
};

export default RouterComponent;
