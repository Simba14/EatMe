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
      recipe: [],
    };

  }

  componentDidMount()  {
    var item1 = this.state.items[0].itemName + ',' + this.state.items[1].itemName + ',' + this.state.items[2].itemName;
    axios.get('http://recipepuppy.com/api/?i=' + item1)
      .then(response => this.setState({ recipe: response.data.results[0].title }));
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
