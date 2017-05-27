import React, { Component } from 'react';
import { AppState } from 'react-native';
import { Provider } from 'react-redux'; //communication glue between react and redux
import { createStore } from 'redux';
import reducers from './reducers';
import Router from './navigations/Router.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillMount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === 'background') {
      console.log('app is in background')
    }
  }

  render() {
    return (
    // <Provider store={createStore}> // provider works with the store. translates the data in the store to be used by react
      <Router />
    // </Provider>
    );
  }
}
