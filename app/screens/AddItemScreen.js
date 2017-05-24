import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import SubmitButton from '../components/SubmitButton';
import ViewContainer from '../components/ViewContainer';

export default class AddItemScreen extends Component {
  state = {itemName: '', expiryDate: '' }

  render() {
    return (
      <ViewContainer>
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
        <SubmitButton onPress={() => ("we will probably use linking and url")}>
          Add an item
        </SubmitButton>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
    marginTop: 5,
    padding: 5
  }
});

module.exports = AddItemScreen
