import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ViewContainer, UpperContainer, LowerContainer } from '../components/common';
import RecipeList from '../components/RecipeList';

class RecipeGeneratorScreen extends Component {

  render() {
    return (
      <ViewContainer>
        <UpperContainer>
          <RecipeList  />
        </UpperContainer>
        <LowerContainer>
        </LowerContainer>
      </ViewContainer>
    );
  };


}

export default RecipeGeneratorScreen;
