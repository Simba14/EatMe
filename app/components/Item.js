import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import UpperContainer from './common/UpperContainer';

class Item extends Component {

  render() {
    return (
      <View style={ styles.viewStyle }>
        <Text style={ styles.textStyleName }> { this.props.item.name } </Text>
        <Text style={ styles.textStyleDate }> { this.props.item.expiryDate } </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create( {
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
