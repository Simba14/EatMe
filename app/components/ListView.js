import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Item from './Item';

class ListView extends Component {
  state = {};

  render() {
    return (
      <View>
        <Item />
      </View>
    )
  }
}

export default ListView;
