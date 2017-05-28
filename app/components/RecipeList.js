import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Realm from 'realm';
import { realm } from './Schema';
import { ItemDB } from './Schema';


class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };

  }

  getFoodItems() {
    let results = [ realm.objects('ItemDB').sorted('expirationDate')];
    itemObject = results.map(x => Object.assign({}, x));
    itemArray = Object.values(itemObject[0]);
    this.setState({ items: itemArray })
  }

  componentWillMount() {
    this.getFoodItems();
  }

  render() {

    return (
      <View>
        <Text> Recipes! {this.state.items[0].itemName} </Text>
      </View>
    );
  };
}

export default RecipeList;
