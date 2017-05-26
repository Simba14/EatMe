import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Realm from 'realm';

export class ItemDB {
  static get () { return realm.objects(ItemDB.schema.name) }
  static schema = {
    name: 'ItemDB',
    primaryKey: 'id',
    properties: {
      id: {type: 'int'},
      itemName: {type: 'string'},
      expirationDate: {type: 'string'},
      createdTimestamp: {type: 'date'}
    }
  }
}

class Item extends Component {

  render () {
    // const getItem = (id) => {
    //   const item = realm.objectForPrimaryKey(ItemDB, id)
    //   if(item === undefined) {
    //     return 'Your item list is empty'
    //   } else {
    //     return item.itemName
    //   }
    // }

    const getAllItems = () => {
      let results = [ realm.objects('ItemDB')];
      array = results.map(x => Object.assign({}, x));
      console.log(array[0][0].itemName);
      debugger;
    }


    return(
      <View style={styles.viewStyle}>
        <Text style={styles.textStyleName}>{getAllItems()}</Text>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    height: 70
  },
  textStyleName: {
    marginLeft: 10,
    marginTop: 10
  },
  textStyleDate: {
    marginLeft: 10,
    marginTop: 10
  }
});

export const realm = new Realm({schema: [ItemDB]});
export default Item;
