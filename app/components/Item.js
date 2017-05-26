import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
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
    var expires = this.getDate(this.props.item.expirationDate);
    if(this.daysToExpire(expires) < 7) {
      var style = this.daysToExpire(expires) < 3 ? styles.shortToExpire : styles.mediumToExpire;
    }

    return(
      <View style={[styles.viewStyle, style] }>
        <Text style={ [styles.textStyleName, style] }> { this.props.item.itemName } </Text>
        <Text style={ [styles.textStyleDate, style] }> Expires: { this.expiryString(expires) } </Text>
      </View>
    );
  }

  getDate(date) {
    dateIntegers = [];
    dateStrings = date.split(',');

    dateIntegers.push(parseInt(dateStrings[0]));
    dateIntegers.push(parseInt(dateStrings[1]) - 1);
    dateIntegers.push(parseInt(dateStrings[2]) + 1);

    return dateIntegers;
  }

  expiryString(date) {
    return moment(date).fromNow();
  }

  daysToExpire(date) {
    var today = moment();
    var expires = moment(date);

    return expires.diff(today, 'days')
  }
};

const styles = StyleSheet.create( {
  viewStyle: {
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    height: 70,
    borderRadius: 2,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1
  },
  mediumToExpire: {
    backgroundColor: '#F7B767',
  },
  shortToExpire: {
    backgroundColor: '#F1BABA',
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
