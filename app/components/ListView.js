import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';
import StartScreen from './common/StartScreen';
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
    if (itemArray.length > 0) {
      return itemArray.map(item => <Item key={item.id} item={item} />);
    } else {
      return ( <StartScreen /> );
    }
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
