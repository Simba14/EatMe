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
      expiryDate: "2017,5,05"
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
    }] };




  //     var sorted = someItems.sort(function(a, b) {
  //       return new Date(a.expiryDate) - new Date(b.expiryDate)
  //     });


    renderItems() {
      if (this.state.items.length > 0) {
        return this.state.items.map(item => <Item key={item.name} item={item} />);
      } else {
        return ( <StartScreen /> );
      }
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
