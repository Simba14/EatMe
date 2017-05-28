import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { SubmitButton, ViewContainer, UpperContainer, LowerContainer } from '../components/common';
import ListView from '../components/ListView';
import RecipeItem from '../components/RecipeItem';
import { Recipes } from 'kraft-recipe-api';


class RecipesScreen extends Component {

  componentWillMount() {
    Recipes.searchByIngredients('Avocado', 'Banana', 'Cheese', function(err, results) {
      console.log(results);
    });
  }


  render() {
    return(
      <ViewContainer>
        <UpperContainer>
          <RecipeItem />
        </UpperContainer>
      </ViewContainer>
    );
  }
}



export default RecipesScreen;
