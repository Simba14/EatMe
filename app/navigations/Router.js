import React, { Component } from 'react';
import { Scene, Router, Image } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import AddItemScreen from '../screens/AddItemScreen';
import MyItemsScreen from '../screens/MyItemsScreen';
import BarcodeScannerScreen from '../screens/BarcodeScannerScreen';
import RecipeGeneratorScreen from '../screens/RecipeGeneratorScreen';
import RecipeWebView from '../components/RecipeWebView';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={ styles.nav}>
      <Scene key='main' direction='leftToRight' >
        <Scene
          key='MyItems'
          component={ MyItemsScreen }
          title="MY ITEMS" initial
          leftButtonImage={require('../assets/logoNavbar.png')}
          onLeft={() => Action.main() }
        />
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
      <Scene key='recipes' direction='horizontal'>
        <Scene
          key='RecipeGenerator'
          component={ RecipeGeneratorScreen }
          title='RECIPES'
          onLeft={() => Actions.main()}
          leftTitle="Back"
        />
      </Scene>
      <Scene key='webview' direction='horizontal'>
        <Scene
          key='RecipeWebView'
          component={ RecipeWebView }
          title='GO MAKE DIS DISH'
          onLeft={() => Actions.recipes()}
          leftTitle="Back"
        />
      </Scene>
    </Router>
  )

}

const styles = {
  nav: {
    backgroundColor: '#FFFFFF',
  }
}

export default RouterComponent;
