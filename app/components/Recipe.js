import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class Recipe extends Component {

  render() {
    return(
      <View style={styles.recipeViewStyle}>
        <Image source={{ uri: this.props.recipe.image_url}} style={styles.imageStyle} />
        <Text style={styles.textStyle}> {this.props.recipe.title}</Text>
      </View>
    );
  };
}

const styles = {
  recipeViewStyle: {
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    height: 150,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1
  },
  textStyle: {
    marginLeft: 10,
    marginTop: 10
  },
  imageStyle: {
    height: 60,
    width: 30,
    flex: 1,
    width: null
  }
}

export default Recipe;
