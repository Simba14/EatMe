import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Item extends Component {
  state = {};

  render () {
    return(
      <View style={styles.viewStyle}>
        <Text style={styles.textStyleName}>Avocado from Sainsburys</Text>
        <Text style={styles.textStyleDate}>Expires on: 27/05/17</Text>
      </View>
    )
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

export default Item;
