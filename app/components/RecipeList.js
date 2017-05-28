import React, { Component } from 'react';
import { View, Text } from 'react-native';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = { itemNames: [] };

  }

  render() {
    return (
      <View>
        <Text> Recipes! </Text>
      </View>
    );
  };
}

export default RecipeList;
