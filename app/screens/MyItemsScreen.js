import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SubmitButton, ViewContainer, UpperContainer, LowerContainer } from '../components/common';
import ListView from '../components/ListView';

class MyItemsScreen extends Component {

  render() {
    return (
      <ViewContainer>
        <UpperContainer>
          <ListView />
          <Text>{this.props.itemName} {this.props.expiryDate}</Text>
        </UpperContainer>
        <LowerContainer>
          <SubmitButton onPress={() => Actions.add() }>
            Add Item
          </SubmitButton>
        </LowerContainer>
      </ViewContainer>
    );
  }
}

export default MyItemsScreen;
