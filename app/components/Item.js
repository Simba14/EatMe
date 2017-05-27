import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import Realm from 'realm';
import Swipeout from 'react-native-swipeout';
import { Actions } from 'react-native-router-flux';

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let swipeoutBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'grey',
      onPress: () => { this.props.deleteItem(this.props.item.id) }
    }];

    var expirationDate = this.props.item.expirationDate;
    if(this.daysToExpire(expirationDate) < 7) {
      var style = this.daysToExpire(expirationDate) < 3 ? styles.shortToExpire : styles.mediumToExpire;
    }

    return(
      <Swipeout right={swipeoutBtns} style={styles.swipeStyle}>
      <View style={[styles.viewStyle, style] }>
        <Text style={ [styles.textStyleName, style] }> { this.props.item.itemName } </Text>
        <Text style={ [styles.textStyleDate, style] }> Expires: { moment(expirationDate).fromNow() } </Text>
      </View>
      </Swipeout>
    );
  }

  daysToExpire(expirationDate) {
    var today = moment();
    var expirationDate = moment(expirationDate);
    return expirationDate.diff(today, 'days')
  }

};

const styles = StyleSheet.create( {
  viewStyle: {
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    height: 70,
    borderRadius: 2,
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
  },
  swipeStyle: {
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  }
});

export default Item;
