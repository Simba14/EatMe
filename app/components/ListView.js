import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';
import Realm from 'realm'
import { realm } from './Schema'
import Item from './Item';
import { ItemDB } from './Schema';

class ListView extends Component {
  getAllItems() {
    let results = [ realm.objects('ItemDB').sorted('expirationDate')];
    itemObject = results.map(x => Object.assign({}, x));
    itemArray = Object.values(itemObject[0]);
    return this.renderItems(itemArray);
  }

  renderItems(itemArray) {
    return itemArray.map(item => <Item key={item.id} item={item} />);
  }

  render() {
    return (
      <ScrollView>
        {this.getAllItems()}
      </ScrollView>
    );
  }
};

export default ListView;
