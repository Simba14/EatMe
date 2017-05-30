import React, { Component } from 'react';
import { AppState, Platform } from 'react-native';
import Router from './navigations/Router.js'
import PushNotification from 'react-native-push-notification'
import Realm from 'realm';
import { realm, ItemDB, UsageDB } from './components/Schema';
import moment from 'moment';
import pluralize from 'pluralize';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    let expiringItemsCount = this.getExpiringItemsCount();
    let binnedItemsCount = this.getBinnedItemsCount();
    this.state = {
      expiringItemsCount
    }
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    this.timer = setInterval(() => {
      this.setState({ expiringItemsCount: this.getExpiringItemsCount() });
    }, 4000);
  }

  componentWillMount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
    clearInterval(this.timer)
  }

  handleAppStateChange(appState) {
    if (appState === 'background' && this.state.expiringItemsCount > 0) {
      let date = new Date(Date.now() + (2 * 1000))//moment({hour: 9, minute: 0, seconds: 0});
      let message = this.getNotificationMessage();

      PushNotification.localNotificationSchedule({
        message: message,
        date: date,
        repeatType: 'day'
      });

    }
  }

  getExpiringItemsCount() {
    specific_day = new Date
    next_day = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
    let results = [ realm.objects('ItemDB').filtered('expirationDate >= $0 && expirationDate < $1', specific_day, next_day)];
    itemObject = results.map(x => Object.assign({}, x));
    itemArray = Object.values(itemObject[0]);
    return itemArray.length;
  }

  getBinnedItemsCount() {
    return '0';
  }

  getNotificationMessage() {
    return 'You have ' + this.state.expiringItemsCount.toString() + " " + pluralize('item',this.state.expiringItemsCount) + ' that will expire today';
  }

  render() {
    return (
      <Router />
    );
  }
}
