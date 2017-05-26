import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { SubmitButton, ViewContainer, UpperContainer, LowerContainer, Input } from '../components/common';
import { ItemDB } from '../components/Item';
import { realm } from '../components/Item';

let count = 0

class AddItemScreen extends Component {
  constructor() {
    super();
    this.state = {itemName: '', expiryDate: '' }
  }

  render() {

    const saveItem = () => {
      Actions.main();
      createItem();
    };

    const createItem = () => {
      realm.write(() => {
        realm.create(ItemDB.schema.name, {
          id: getId(),
          itemName: this.state.itemName,
          expirationDate: this.state.expiryDate,
          createdTimestamp: new Date()
        });
      });
    }

    const getId = () => {
      count += 1
      return count
    }

    return (
      <ViewContainer>
        <UpperContainer>
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
            SAVE TO MY LIST
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
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10
  }
});


export default AddItemScreen;
