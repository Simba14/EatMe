import React, { Component } from 'react';
import { AppState, Platform } from 'react-native';
import Router from './navigations/Router.js'
import PushNotification from 'react-native-push-notification'
import Realm from 'realm';
import { realm, ItemDB } from './components/Schema';
import moment from 'moment';
import pluralize from 'pluralize';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    let expiringItemsCount = this.getExpiringItemsCount()
    this.state = {
      expiringItemsCount: expiringItemsCount
    }
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    this.timer = setInterval(() => {
      this.getExpiringItemsCount();
    }, 4000);
  }

  componentWillMount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
    clearInterval(this.timer)
  }

  handleAppStateChange(appState) {
    if (appState === 'background') {
      let date = moment({hour: 9, minute: 0, seconds: 0});
      let message = this.getNotificationMessage();

      PushNotification.localNotificationSchedule({
        message: message,
        date,
        repeatType: 'day'
      });

    }
  }

  getExpiringItemsCount() {
    let results = [ realm.objects('ItemDB').sorted('expirationDate')];
    itemObject = results.map(x => Object.assign({}, x));
    itemArray = Object.values(itemObject[0]);
    return itemArray.length;
  }

  getNotificationMessage() {
    return 'You have ' + this.state.expiringItemsCount.toString() + " " + pluralize('item',this.state.expiringItemsCount) + ' that will expire today';
  }

  render() {
    return (
    // <Provider store={createStore}> // provider works with the store. translates the data in the store to be used by react
      <Router />
    // </Provider>
    );
  }
}
