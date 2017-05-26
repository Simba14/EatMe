import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { SubmitButton, ViewContainer, UpperContainer, LowerContainer } from '../components/common';
import ListView from '../components/ListView';
import { realm } from '../components/Schema';
import ItemDB from '../components/Schema';

class MyItemsScreen extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id) {
    console.log("Here");
    const itemToDelete = realm.objectForPrimaryKey('ItemDB', id);
    realm.write(() => {
      realm.delete(itemToDelete);
    });
  }

  render() {
    return (
      <ViewContainer>
        <UpperContainer>
          <ListView deleteItem={this.deleteItem}/>
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
