import React, { Component } from 'react';
import { WebView } from 'react-native';

class RecipeWebView extends Component {
  render() {
    return (
      <WebView source={{uri: 'https://google.com'}} />
    );
  };
}

export default RecipeWebView;
