import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

import SubmitButton from '../components/SubmitButton';
import ViewContainer from '../components/ViewContainer';
import UpperContainer from '../components/UpperContainer';
import LowerContainer from '../components/LowerContainer';
import Header from '../components/Header';

export default class AddItemScreen extends Component {
  state = {itemName: '', expiryDate: '' }

  render() {
    return (
      <ViewContainer>
        <UpperContainer>
          <Header headerText={'ADD ITEM'}/>
          <Text style={styles.subHeadingText}>Enter a name and the expiry date</Text>
          <TextInput
            value={this.state.text}
            onChangeText={itemName => this.setState({ itemName })}
            style={ styles.textInput }
            placeholder="Item Name"
          />
          <TextInput
            value={this.state.text}
            onChangeText={expiryDate => this.setState({ expiryDate })}
            style={ styles.textInput }
            placeholder="Expiry Date"
          />
        </UpperContainer>
        <LowerContainer>
          <SubmitButton onPress={() => ("we will probably use linking and url")}>
            Save Item
          </SubmitButton>
        </LowerContainer>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 5,
    padding: 5,
    paddingLeft: 10,
    height: 40,
    fontSize: 16
  },
  subHeadingText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10
  }
});

module.exports = AddItemScreen
