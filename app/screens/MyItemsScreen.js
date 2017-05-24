import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { SubmitButton, ViewContainer, UpperContainer, LowerContainer, Header } from '../components/common';
import ListView from '../components/ListView'

class MyItemsScreen extends Component {

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

export default MyItemsScreen;
