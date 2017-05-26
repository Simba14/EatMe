import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';


import StartScreen from './common/StartScreen';
import Realm from 'realm'
import { realm } from './Item'
import Item from './Item';
import { ItemDB } from './Item';

class ListView extends Component {

    renderItems() {
      if (this.state.items.length > 0) {
        return this.state.items.map(item => <Item key={item.name} item={item} />);
      } else {
        return ( <StartScreen /> );
      }
    }


  getAllItems() {
    let results = [ realm.objects('ItemDB')];
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
