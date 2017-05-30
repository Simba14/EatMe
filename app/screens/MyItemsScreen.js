import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  SubmitButton,
  ViewContainer,
  UpperContainer,
  LowerContainer,
  BottomNavContainer,
  NavItemContainer
} from '../components/common';
import { NavItem } from '../components/common/NavItem';
import { NavActiveBar } from '../components/common/NavActiveBar';
import ListView from '../components/ListView';
import { realm } from '../components/Schema';
import ItemDB from '../components/Schema';

class MyItemsScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ViewContainer>
        <UpperContainer>
          <ListView deleteItem={this.deleteItem}/>
        </UpperContainer>
        <LowerContainer>
          <SubmitButton onPress={() => Actions.add() }>
            ADD ITEM
          </SubmitButton>
        </LowerContainer>
        <BottomNavContainer>
          <NavItem imagePath={ require('../assets/myitemsicon.png')} style={styles.viewStyle}>
            My Items
          </NavItem>
          <NavItem imagePath={ require('../assets/recipeicon.png')}>
            Recipes
          </NavItem>
        </BottomNavContainer>
          <NavActiveBar style={styles.viewStyle} />
      </ViewContainer>
    );
  }

}

const styles = StyleSheet.create({
  viewStyle: {
    // flexDirection: 'row',
    justifyContent: 'flex-end',
    // alignItems: 'flex-end'
  }
});

export default MyItemsScreen;
