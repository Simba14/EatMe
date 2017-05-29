import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import StartScreen from './common/StartScreen';
import Realm from 'realm';
import { itemDatabase, realm } from './Schema';
import Item from './Item';

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id, choice) {
    const itemToDelete = realm.objectForPrimaryKey('ItemDB', id);
    realm.write(() => {
      realm.delete(itemToDelete);
    });
    this.updateArray();
    this.updateUsage(choice);
  }

  updateUsage(choice) {
    if(choice === "binned"){
      realm.write(() => {
        console.log(realm.create('UsageDB', {id: 1, binned: 1}, true));
      });
    } else {

    }
  }

  updateArray() {
    let results = [ realm.objects('ItemDB').sorted('expirationDate')];
    itemObject = results.map(x => Object.assign({}, x));
    itemArray = Object.values(itemObject[0]);
    this.setState({items: itemArray});
  }

  componentWillMount() {
    this.updateArray();
  }

  renderItems() {
    if (this.state.items.length > 0) {
      return this.state.items.map(item => <Item key={item.id} item={item} deleteItem={this.deleteItem}/>);
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
