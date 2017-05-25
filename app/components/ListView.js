import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';

import Item from './Item';

class ListView extends Component {
  state = { items: [{
      name: "Bananas",
      expiryDate: "2017,5,26"
    }, {
      name: "Avocado",
      expiryDate: "2017,5,29"
    }, {
      name: "Nuts",
      expiryDate: "2017,7,12"
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
