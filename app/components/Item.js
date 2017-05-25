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

    if (this.daysToExpire() < 3) {
      var style = styles.shortToExpire;
    } else if (this.daysToExpire() < 7) {
      var style = styles.mediumToExpire;
    } else {
      // var style = styles.viewStyle;
    }

    return(
      <View>
        <View style={[styles.viewStyle, style]}>
          <Text style={styles.textStyleName}>Avocado from Sainsburys</Text>
          <Text style={styles.textStyleDate}>Expires in: {this.daysToExpire()} days</Text>
        </View>
      </View>
    )
  }
  daysToExpire() {
    var today = moment().format('l');
    var expires = moment('27-5-2017', 'DD-M-YYYY');
    return expires.diff(today,'days');
    // if expires in 0 days return string today
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
