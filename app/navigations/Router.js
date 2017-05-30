import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import { Image } from 'react-native';
import AddItemScreen from '../screens/AddItemScreen';
import MyItemsScreen from '../screens/MyItemsScreen';
import BarcodeScannerScreen from '../screens/BarcodeScannerScreen';
import RecipeGeneratorScreen from '../screens/RecipeGeneratorScreen';
import RecipeWebView from '../components/RecipeWebView';
import Icon from 'react-native-vector-icons/FontAwesome';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={ styles.nav }>
      <Scene key='main' direction='leftToRight' >
        <Scene
          key='MyItems'
          component={ MyItemsScreen }
          onRight={() => Actions.recipes() }
          rightTitle= { <Image source={require('../assets/chef-blue.png')} />  }
          title="MY ITEMS"
          initial
        />
      </Scene>

      <Scene key='add' direction='vertical'>
        <Scene
          key='AddItem'
          onLeft={() => Actions.main() }
          onRight={() => Actions.barcode() }
          title= "ADD ITEM"
          leftTitle= 'Back'
          rightTitle= {<Icon name="barcode" size={23} color="#000" />}
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
          title='RECIPE'
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
    // marginTop: 10
  }
}

export default RouterComponent;
