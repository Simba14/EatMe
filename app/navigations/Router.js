import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import AddItemScreen from '../screens/AddItemScreen';
import MyItemsScreen from '../screens/MyItemsScreen';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={ styles.nav }>
      <Scene key='main' direction='leftToRight' >
        <Scene key='MyItems' component={ MyItemsScreen } title="MY ITEMS" initial />
      </Scene>
      <Scene key='recipes'>
        <Scene key='Recipes' title='RECIPES'/>
      </Scene>
      <Scene key='add' direction='horizontal'>
        <Scene key='AddItem'  onLeft={() => Actions.main() } title="ADD ITEM" leftTitle='Back' component={ AddItemScreen } />
      </Scene>
    </Router>
  )
}

const styles = {
  nav: {
    backgroundColor: '#FFFFFF',
    marginTop: 10
  }
}

export default RouterComponent;
