import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';
import StartScreen from './common/StartScreen';
import Realm from 'realm';
import { realm } from './Schema';
import { ItemDB } from './Schema';
import Item from './Item';

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.props.deleteItem = this.props.deleteItem.bind(this);
  }

  componentWillMount() {
    let results = [ realm.objects('ItemDB').sorted('expirationDate')];
    itemObject = results.map(x => Object.assign({}, x));
    itemArray = Object.values(itemObject[0]);
    this.setState({items: itemArray});

    return this.renderItems();
  }

  renderItems() {
    if (this.state.items.length > 0) {
      return this.state.items.map(item => <Item key={item.id} item={item} deleteItem={this.props.deleteItem}/>);
    } else {
      return ( <StartScreen /> );
    }
  }

  render() {
    return (
      <ScrollView>
        {this.renderItems()}
      </ScrollView>
    );
  }

};

export default ListView;
