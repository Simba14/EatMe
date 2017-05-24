import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AddItemScreen from './app/screens/AddItemScreen';
import MyItemsScreen from './app/screens/MyItemsScreen';

export default class EatMe extends Component {
  render() {
    return (
      <AddItemScreen />
      // <MyItemsScreen />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('EatMe', () => EatMe);
