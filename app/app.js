import React, { Component } from 'react';
import { AppState, Platform } from 'react-native';
// import { Provider } from 'react-redux'; //communication glue between react and redux
// import { createStore } from 'redux';
// import reducers from './reducers';
import Router from './navigations/Router.js'
import PushNotification from 'react-native-push-notification'
import Realm from 'realm';
import { realm } from './components/Schema';
import { ItemDB } from './components/Schema';
import moment from 'moment';
import pluralize from 'pluralize';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.state = {
      expiringItemsCount: this.getExpiringItemsCount()
    }
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillMount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if (appState === 'background') {
      let date = new Date(Date.now() + (2 * 1000));
      let message = 'You have an ' + pluralize('item',2) + ' that will expire today';
      console.log(message);

      PushNotification.localNotificationSchedule({
        title: 'Your Food Is Going To TERMINATE!',
        message: message, //+ this.getExiringItemsCount() + 'items that are set to expire',
        date,
      });

    }
  }

  getExpiringItemsCount() {
    let results = [ realm.objects('ItemDB').sorted('expirationDate')];
    itemObject = results.map(x => Object.assign({}, x));
    itemArray = Object.values(itemObject[0]);
    return itemArray.length;
  }

  render() {
    return (
    // <Provider store={createStore}> // provider works with the store. translates the data in the store to be used by react
      <Router />
    // </Provider>
    );
  }
}
