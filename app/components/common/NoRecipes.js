import React from 'react';
import { View, Text } from 'react-native';
import { UpperContainer } from './UpperContainer';

const NoRecipes = () => {
  return (
    <View style={styles.viewStyle}>
      <UpperContainer>
        <Text style={styles.title}>No recipes found </Text>
        <Text style={styles.body}>Add some items to your list before generating recipes</Text>
      </UpperContainer>
    </View>
  )
}

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  title: {
    marginTop: 90,
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'System',
    color: '#323232'
  },
  body: {
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'System',
    color: '#323232'
  }
}

export default NoRecipes;
