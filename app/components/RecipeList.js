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
      items: [],
      recipes: [],
    };

  }

  componentDidMount()  {
    if (this._threeOrMoreItems()) {
      var items = this.state.items[0].itemName + ',' + this.state.items[1].itemName + ',' + this.state.items[2].itemName;
    } else if (this.twoItems()) {
      var items = this.state.items[0].itemName + ',' + this.state.items[1].itemName;
    } else if (this._oneItem()) {
      var items = this.state.items[0].itemName;
    } else {
      Alert.alert("You have no item silly!")
    }
    axios.get('http://recipepuppy.com/api/?i=' + items)
      .then(response => this.setState({ recipes: response.data.results }));
  }


  //
  componentWillMount() {
    let results = [ realm.objects('ItemDB').sorted('expirationDate')];
    itemObject = results.map(x => Object.assign({}, x));
    itemArray = Object.values(itemObject[0]);
    console.log(itemArray[0].itemName)
    this.setState({ items: itemArray })
  }

  //
  // componentWillMount() {
  //   this.getFoodItems();
  // }

  // renderItems() {
  //   return this.state.items.map(item =>
  //   <Text> {item.itemName} </Text>);
  // }

  _threeOrMoreItems() {
    return this.state.items.length >= 3;
  }

  _twoItems() {
    return this.state.items.length === 2;
  }

  _oneItem() {
    return this.state.items.length === 1;
  }

  renderRecipes() {
    return this.state.recipes.map(recipe =>
      <Text>{recipe.title}</Text>
    );
  }


  render() {

    return (
      <View>
          {this.renderRecipes()}
      </View>
    );
  };
}

export default RecipeList;
