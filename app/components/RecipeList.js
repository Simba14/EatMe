import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import Realm from 'realm';
import { realm } from './Schema';
import { ItemDB } from './Schema';
import axios from 'axios';


class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Potatoes"],
      recipe: [],
      error: ""
    };

  }

  componentWillMount()  {
    // var item1 = this.state.items[0];
    axios.get('http://recipepuppy.com/api/?i=' + 'potato')
      .then(response => this.setState({ recipe: response.data.results[0].title }));
  }



  // getFoodItems() {
  //   let results = [ realm.objects('ItemDB').sorted('expirationDate')];
  //   itemObject = results.map(x => Object.assign({}, x));
  //   itemArray = Object.values(itemObject[0]);
  //   this.setState({ items: itemArray })
  // }
  //
  // componentWillMount() {
  //   this.getFoodItems();
  // }

  // renderRecipe() {
  //   return this.state.recipe;
  // }

  render() {

    return (
      <View>
        <Text>
          {this.state.recipe}
        </Text>
      </View>
    );
  };
}

export default RecipeList;
