import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ViewContainer, UpperContainer } from '../components/common'

class RecipeGeneratorScreen extends Component {

  render() {

    return (
      <ViewContainer>
        <UpperContainer>
          <Text>RECIPES!</Text>
        </UpperContainer>
      </ViewContainer>
    );
  };


}

export default RecipeGeneratorScreen;
