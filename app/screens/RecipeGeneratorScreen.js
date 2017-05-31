import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {
  ViewContainer,
  UpperContainer,
  LowerContainer,
  BottomNavContainer,
  NavItemContainer,
  NavColumnContainer,
  NavItem,
  NavActiveBar
} from '../components/common';
import RecipeList from '../components/RecipeList';
import { Actions } from 'react-native-router-flux';

class RecipeGeneratorScreen extends Component {

  render() {
    return (
      <ViewContainer>
        <UpperContainer>
          <RecipeList  />
        </UpperContainer>
        <LowerContainer>
        </LowerContainer>

        <BottomNavContainer>
          <TouchableOpacity onPress={ () => Actions.main()}>
            <NavItemContainer>
              <NavItem imagePath={ require('../assets/myitemsicon.png')} style={styles.viewStyle}>
                My Items
              </NavItem>
              <NavActiveBar style={styles.viewStyle} />
            </NavItemContainer>
          </TouchableOpacity>

            <NavItemContainer>
              <NavItem imagePath={ require('../assets/recipeicon.png')}>
                Recipes
              </NavItem>
            </NavItemContainer>

        </BottomNavContainer>

      </ViewContainer>
    );
  };

}

const styles = {
  viewStyle: {
    // justifyContent: 'center'
    // alignItems: 'flex-end'
  }
}

export default RecipeGeneratorScreen;
