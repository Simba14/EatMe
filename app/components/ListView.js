import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import StartScreen from './common/StartScreen';
import Realm from 'realm';
import { itemDatabase, realm } from './Schema';
import Item from './Item';
import uuid from 'uuid';

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
    usageArray = this.queryDatabase('UsageDB','id');
    let binnedCount = 0
    let eatenCount = 0
    if(usageArray[0] !== undefined){
      binnedCount = usageArray[0].binned
      eatenCount = usageArray[0].eaten
    }

    realm.write(() => {
      if(choice === "binned"){
        realm.create('UsageDB', { id: uuid.v1(), itemName: 'test', binned: binnedCount+1, });
      } else {
        realm.create('UsageDB', { id: uuid.v1(), itemName: 'test', eaten: eatenCount+1 });
      }
    });
  }

  queryDatabase(databaseName,sortMethod) {
    let results = [ realm.objects(databaseName).sorted(sortMethod)];
    resultsObject = results.map(x => Object.assign({}, x));
    return resultsArray = Object.values(resultsObject[0]);
  }

  updateArray() {
    itemArray = this.queryDatabase('ItemDB','expirationDate');
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
