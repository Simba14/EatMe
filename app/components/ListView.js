import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class ListView extends Component {
  state = {};

  render() {
    return (
      <View>
        <Text>This is gonna be an item</Text>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#F7F7F7'
  }
}

export default ListView;
