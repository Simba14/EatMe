import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { SubmitButton, ViewContainer, UpperContainer, LowerContainer, Header, Input } from '../components/common';
import Item from '../components/Item';

class AddItemScreen extends Component {
  constructor() {
    super();
    this.state = {itemName: '', expiryDate: '' }
  }

  render() {

    const saveItem = () => {
      Actions.main({ value: this.state.itemName, expiryDate: this.state.expiryDate });
    };

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
          <SubmitButton onPress={saveItem}>
            Save Item
          </SubmitButton>
        </LowerContainer>
      </ViewContainer>
    );
  }

  onClick() {
    Actions.main();
    this.saveItem;
  }

  saveItem(value, expirationDate) {

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
