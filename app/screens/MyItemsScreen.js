import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  SubmitButton,
  ViewContainer,
  UpperContainer,
  LowerContainer,
  BottomNavContainer,
  NavItemContainer,
  NavColumnContainer
} from '../components/common';
import { NavItem } from '../components/common/NavItem';
import { NavActiveBar } from '../components/common/NavActiveBar';
import ListView from '../components/ListView';
import { itemDatabase, realm } from '../components/Schema';
import PushController from '../components/PushController';

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
          <SubmitButton onPress={ () => Actions.add() }>
            ADD ITEM
          </SubmitButton>
        </LowerContainer>

        <BottomNavContainer>

          <NavItemContainer>
              <NavItem imagePath={ require('../assets/myitemsicon.png')} style={styles.viewStyle}>
                My Items
              </NavItem>
          </NavItemContainer>

          <TouchableOpacity onPress={ () => Actions.recipes() }>
            <NavItemContainer>
              <NavItem imagePath={ require('../assets/recipeicon.png')}>
                Recipes
              </NavItem>
              <NavActiveBar style={styles.viewStyle} />
            </NavItemContainer>
          </TouchableOpacity>
        </BottomNavContainer>

        <PushController />
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end'
  }
});

export default MyItemsScreen;
