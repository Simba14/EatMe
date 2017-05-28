import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import AddItemScreen from '../screens/AddItemScreen';
import MyItemsScreen from '../screens/MyItemsScreen';
import BarcodeScannerScreen from '../screens/BarcodeScannerScreen';
import RecipesScreen from '../screens/MyItemsScreen';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={ styles.nav }>
      <Scene key='main' direction='leftToRight' >
        <Scene key='MyItems' component={ MyItemsScreen } title="MY ITEMS" initial />
      </Scene>

      <Scene key='recipes'>
        <Scene key='Recipes' component={ RecipesScreen } title='RECIPES'/>
      </Scene>

      <Scene key='add' direction='vertical'>
        <Scene
          key='AddItem'
          onLeft={() => Actions.main() }
          onRight={() => Actions.barcode() }
          title="ADD ITEM"
          leftTitle='Back'
          rightTitle='Camera'
          component={ AddItemScreen }
        />
      </Scene>

      <Scene key='barcode' direction='horizontal'>
        <Scene
          key='BarcodeScanner'
          component={ BarcodeScannerScreen }
          title="SCAN BARCODE"
          onLeft={() => Actions.add() }
          leftTitle="Back"
        />
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
