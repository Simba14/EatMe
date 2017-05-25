import moment from 'moment';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Item extends Component {
  state = {};

  render () {
    if(this.daysToExpire() < 7){
      var style = this.daysToExpire() < 3? styles.shortToExpire : styles.mediumToExpire;
    }

    return(
      <View>
        <View style={[styles.viewStyle, style]}>
          <Text style={styles.textStyleName}>Avocado from Sainsburys</Text>
          <Text style={styles.textStyleDate}>Expires: {this.expiryString()}</Text>
        </View>
      </View>
    )
  }
  daysToExpire() {
    var today = moment();
    var expires = moment([2017,4,29]).add(1, 'days');
    return expires.diff(today, 'days')
  }
  expiryString() {
    return moment([2017,4,29]).add(1, 'days').fromNow();
  }


}

const styles = StyleSheet.create({
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

export default Item;
