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
    }, {
      name: "Oranges",
      expiryDate: "2017,7,12"
    }, {
      name: "Broccoli",
      expiryDate: "2017,5,12"
    }, {
      name: "Pasta",
      expiryDate: "2017,10,12"
    }, {
      name: "Tomatoes",
      expiryDate: "2017,9,12"
    }, {
      name: "Apples",
      expiryDate: "2017,6,12"
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
