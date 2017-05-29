import React, { Component } from 'react';
import { Text, Alert, ScrollView } from 'react-native';
import Realm from 'realm';
import { realm } from './Schema';
import { ItemDB } from './Schema';
import axios from 'axios';
import Recipe from './Recipe';
import NoRecipes from './common/NoRecipes';


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
    } else if (this._twoItems()) {
      var items = this.state.items[0].itemName + ',' + this.state.items[1].itemName;
    } else if (this._oneItem()) {
      var items = this.state.items[0].itemName;
    } else {
      this.renderNoRecipes
    }
    axios.get('http://food2fork.com/api/search?key=b2eb251598eb1b9ffa9244ceab691efa&q=' + items)
      .then(response => this.setState({ recipes: response.data.recipes }));
  }


  componentWillMount() {
    let results = [ realm.objects('ItemDB').sorted('expirationDate')];
    itemObject = results.map(x => Object.assign({}, x));
    itemArray = Object.values(itemObject[0]);
    this.setState({ items: itemArray })
  }

  renderRecipes() {
    if (this.state.items.length > 0) {
      return this.state.recipes.map(recipe =>
        <Recipe key={recipe.recipe_id} recipe={recipe} />
      );
    } else {
      return <NoRecipes />
    }
  }

  render() {
    return (
      <ScrollView>
        {this.renderRecipes()}
      </ScrollView>
    );
  };


  _threeOrMoreItems() {
    return this.state.items.length >= 3;
  }
  _twoItems() {
    return this.state.items.length === 2;
  }
  _oneItem() {
    return this.state.items.length === 1;
  }
}

export default RecipeList;
