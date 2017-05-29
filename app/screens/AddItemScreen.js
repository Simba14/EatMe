import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, AsyncStorage, DatePickerIOS, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { SubmitButton, ViewContainer, UpperContainer, LowerContainer, Input } from '../components/common';
import { Database, realm } from '../components/Schema';
import uuid from 'uuid';

class AddItemScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      itemName: this.props.scannedItem
    }
  }

  adaptDate(date) {
    date.setDate(date.getDate() + 1);
    date.setHours(0,0,0,0);
    this.setState({date: date});
  }

  render() {

    const saveItem = () => {
      if(this.state.itemName === undefined) {
        Alert.alert(
          'Please enter a food item',
        )
      } else {
        Actions.main();
        this.adaptDate(this.state.date);
        createItem();
        }
      }

    const createItem = () => {
      realm.write(() => {
        let newItem = realm.create('ItemDB', {
          id: uuid.v1(),
          itemName: this.state.itemName,
          expirationDate: this.state.date,
          createdTimestamp: new Date()
        });
      });
    }
      // realm.create(Database.schema.name, {
      //   id: uuid.v1(),
      //   itemName: this.state.itemName,
      //   expirationDate: this.state.date,
      //   createdTimestamp: new Date()

    return (
      <ViewContainer>
        <UpperContainer>
          <Text style={styles.subHeadingText}>Enter a name and its expiry date</Text>
          <Input
            placeholder="Avocado"
            value={this.state.itemName}
            onChangeText={itemName => this.setState({ itemName })}
          />
          <View style={styles.dateViewStyle}>
            <DatePickerIOS
              date={this.state.date}
              mode="date"
              onDateChange={(date)=>this.setState({date})}
              minimumDate={new Date()}
            />
        </View>
        </UpperContainer>
        <LowerContainer>
          <SubmitButton onPress={saveItem}>
            SAVE TO MY LIST
          </SubmitButton>
        </LowerContainer>
      </ViewContainer>
    );
  };
}

const styles = StyleSheet.create({
  subHeadingText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#323232',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10
  },
  dateViewStyle: {
    marginTop: 1
  }
});

export default AddItemScreen;
