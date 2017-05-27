import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { SubmitButton, ViewContainer, UpperContainer, LowerContainer } from '../components/common';
import ListView from '../components/ListView';
import RecipeItem from '../components/RecipeItem';

class RecipesScreen extends Component {

  componentWillMount() {

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
