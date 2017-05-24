import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

import ViewContainer from '../components/ViewContainer';
import UpperContainer from '../components/UpperContainer';
import LowerContainer from '../components/LowerContainer';
import Header from '../components/Header';
import ListView from '../components/ListView';
import SubmitButton from '../components/SubmitButton';


export default class MyItemsScreen extends Component {

  render() {
    return (
      <ViewContainer>
        <UpperContainer>
          <Header headerText={'MY ITEMS'}/>
          <ListView />
        </UpperContainer>
        <LowerContainer>
          <SubmitButton onPress={() => ("we will probably use linking and url")}>
            Add Item
          </SubmitButton>
        </LowerContainer>
      </ViewContainer>
    );
  }
}

module.exports = MyItemsScreen
