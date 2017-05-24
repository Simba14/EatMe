import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import AddItemScreen from '../screens/AddItemScreen';
import MyItemsScreen from '../screens/MyItemsScreen';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='MyItems' component={ MyItemsScreen }/>
    </Router>
  );
};

export default RouterComponent;
