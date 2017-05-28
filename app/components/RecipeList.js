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
      recipe: []
    };

  }

  componentWillMount() {
    // var item1 = this.state.items[0];
    axios.get('http://recipepuppy.com/api/?i=' + 'potato')
      .then(response => this.setState({ recipe: response.data.results[0].title }));
      .catch(error => Alert.alert('no response...'));
  }

  axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

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
        {this.state.recipe[0]}
      </View>
    );
  };
}

export default RecipeList;
