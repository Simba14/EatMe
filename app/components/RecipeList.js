import React, { Component } from 'react';
import { View, Image, Text, Alert, ScrollView, TouchableHighlight, WebView } from 'react-native';
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
      loading: true
    };
  }

  componentDidMount() {
    if (this.state.items.length > 4) {
      var items = this.generateQuery(4);
    } else {
      var items = this.generateQuery(this.state.items.length);
    }
    axios.get('http://food2fork.com/api/search?key=b2eb251598eb1b9ffa9244ceab691efa&q=' + items)
      .then(response => this.setState({ recipes: response.data.recipes,
                                        loading: false
                                      }));
  }

  generateQuery(numberOfItems) {
    queryArray = [];
    for (var i = 0; i < numberOfItems; i++) {
      queryArray.push(this.state.items[i].itemName);
    };
    return queryArray.join(',');
  }


  loading() {
    if (this.state.loading === true) {
      return (
        <View style={styles.loadingContainer}>
          <Image style={styles.loading} source={require('../assets/loading.gif')} />
        </View>
      );
    };
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
    if (this.state.items.length > 0) {
      return (
        <ScrollView>
          {this.loading()};
          {this.renderRecipes()}
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
          {this.renderRecipes()}
        </ScrollView>
      );
    }
  }

  _threeOrMoreItems() {
    return this.state.items.length >= 3;
  }
  _twoItems() {
    return this.state.items.length === 2;
  }
  _oneItem() {
    return this.state.items.length === 1;
  }
};

const styles = {
  loadingContainer: {
    flex: 1,
    alignItems: 'center'
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 200
  }
}

export default RecipeList;
