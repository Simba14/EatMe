import React, { Component } from 'react';
import { WebView } from 'react-native';

class RecipeWebView extends Component {
  render() {
    return (
      <WebView source={{uri: this.props.recipe.source_url}} />
    );
  };
}

export default RecipeWebView;
