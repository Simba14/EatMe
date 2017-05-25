import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';

import Item from './Item';

class ListView extends Component {
  state = { items: [{
      name: "Bananas",
      expiryYear: 2017,
      expiryMonth: 4,
      expiryDay: 26
    }, {
      name: "Avocado",
      expiryYear: 2017,
      expiryMonth: 4,
      expiryDay: 26
    }, {
      name: "Nuts",
      expiryYear: 2017,
      expiryMonth: 4,
      expiryDay: 26
    }]
  };

  renderItems() {
    return this.state.items.map(item => <Item key={item.name} item={item} />);
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
