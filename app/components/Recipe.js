import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class Recipe extends Component {

  render() {
    return(
      <View style={styles.recipeViewStyle}>
        <View style={styles.imageViewStyle}>
          <Image source={{ uri: this.props.recipe.image_url}} style={styles.imageStyle} />
        </View>
        <View style={styles.titleViewStyle}>
          <Text style={styles.titleStyle}> {this.props.recipe.title}</Text>
          <Text style={styles.publisherStyle}> Publisher: {this.props.recipe.publisher} </Text>
        </View>
      </View>
    );
  };
}

const styles = {
  recipeViewStyle: {
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    height: 170,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  imageViewStyle: {
    height: 100,
  },
  imageStyle: {
    opacity: 0.9,
    height: 60,
    width: 30,
    flex: 1,
    width: null
  },
  titleViewStyle: {
    height: 70,
  },
  titleStyle: {
    marginLeft: 10,
    marginTop: 10
  },
  publisherStyle: {
    marginLeft: 10,
    marginTop: 10,
    // fontStyle: 'italic'
  },
}

export default Recipe;
