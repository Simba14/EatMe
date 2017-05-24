import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AddItemScreen from './app/screens/AddItemScreen';

export default class EatMe extends Component {
  render() {
    return (
      <AddItemScreen />
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('EatMe', () => EatMe);
