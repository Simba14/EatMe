import React { Component }, from 'react';
import { Text, View } from 'react-native';

class Recipe extends Component {

  render() {
    return(
      <View>
        <Text> {this.props.recipeName}</Text>
      </View>
    );
  };
}

const styles = {
  recipeViewStyle: {
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    height: 70,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1
  },
  textStyle: {
    marginLeft: 10,
    marginTop: 10
  }
}

export default Recipe;
