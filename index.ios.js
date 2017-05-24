import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './app/components/Header';


export default class EatMe extends Component {
  render() {
    return (
      <View>
        <Header/>
      </View>
    );
  }
}

const styles = StyleSheet.create({


});

AppRegistry.registerComponent('EatMe', () => EatMe);
