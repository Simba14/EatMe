import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';

import Item from './Item';

class ListView extends Component {
  state = { items = []; };

  renderItems() {
    return this.state.items.map(item => <Item item={item} />);
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
