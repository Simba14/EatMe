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
          <Text style={styles.title}>EAT ME SOON!</Text>
          <ListView />
          <Text>{this.props.itemName} {this.props.expiryDate}</Text>
        </UpperContainer>
        <LowerContainer>
          <SubmitButton onPress={() => Actions.add() }>
            ADD ITEM
          </SubmitButton>
        </LowerContainer>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 18,
    color: '#323232'
  }
});



export default MyItemsScreen;
