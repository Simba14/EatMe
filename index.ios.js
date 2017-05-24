import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './app/components/Header';
import ListView from './app/components/ListView';


export default class EatMe extends Component {
  render() {
    return (
      <View>
        <Header headerText={'MY ITEMS'}/>
        <ListView />
      </View>
    );
  }
}

const styles = StyleSheet.create({


});

AppRegistry.registerComponent('EatMe', () => EatMe);
