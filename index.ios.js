import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SubmitButton from './app/components/SubmitButton'
import ViewContainer from './app/components/ViewContainer'

export default class EatMe extends Component {
  render() {
    return (
      <ViewContainer>
        <SubmitButton />
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('EatMe', () => EatMe);
