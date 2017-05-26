import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, AsyncStorage, DatePickerIOS } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { SubmitButton, ViewContainer, UpperContainer, LowerContainer, Input } from '../components/common';
import { ItemDB } from '../components/Schema';
import { realm } from '../components/Schema';

class AddItemScreen extends Component {
  static defaultProps = {
    date: new Date()
  }
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      date: this.props.date }
  }

  onDateChange = (date) => {
    this.setState({date: date});
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
          expirationDate: this.state.date,
          createdTimestamp: new Date()
        });
      });
    }

    const getId = () => {
      let results = [ realm.objects('ItemDB')];
      itemObject = results.map(x => Object.assign({}, x));
      itemArray = Object.values(itemObject[0]);
      count = itemArray.length + 1;
      return count;
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
          <DatePickerIOS
            date={this.state.date}
            mode="date"
            onDateChange={this.onDateChange}
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
