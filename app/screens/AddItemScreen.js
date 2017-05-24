import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { SubmitButton, ViewContainer, UpperContainer, LowerContainer, Header, Input } from '../components/common';

class AddItemScreen extends Component {
  state = {itemName: '', expiryDate: '' }

  render() {
    return (
      <ViewContainer>
        <UpperContainer>
          <Header headerText={'ADD ITEM'}/>
          <Text style={styles.subHeadingText}>Enter a name and its expiry date</Text>
          <Input
            placeholder="Avocado"
            value={this.state.text}
            onChangeText={itemName => this.setState({ itemName })}
          />
          <Input
            placeholder="25/12/17"
            value={this.state.text}
            onChangeText={expiryDate => this.setState({ expiryDate })}
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

export default AddItemScreen;
