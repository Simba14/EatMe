import React from 'react';
import { View, Text } from 'react-native';
import { UpperContainer } from './UpperContainer';

const NoRecipes = () => {
  return (
    <View>
      <UpperContainer>
        <Text>No recipes found </Text>
        <Text>Add items blablabla</Text>
      </UpperContainer>
    </View>
  )
}

export default NoRecipes;
