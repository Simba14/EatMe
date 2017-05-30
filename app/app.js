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

    if (appState === 'background') {
      let date = new Date(Date.now() + (4 * 1000)) //moment({ hour: 21, minute: 31, seconds: 0 })
      let message = 'Please';

      PushNotification.localNotificationSchedule({
        message: message,
        date: date,
        repeatType: 'week'
    });
}

    }
  }

  getExpiringItemsCount() {
    specificDay = new Date;
    nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    itemsExpiringToday = this.queryDatabase('ItemDB', 'expirationDate >= $0 && expirationDate < $1', specificDay, nextDay);
    return itemsExpiringToday.length;
  }

  getBinnedItemsCount() {
    return '0';
  }

  getNotificationMessage() {
    return 'You have ' + this.state.expiringItemsCount.toString() + " " + pluralize('item',this.state.expiringItemsCount) + ' that will expire today';
  }

  queryDatabase(databaseName, filteredBy, startDate, endDate) {
    let results = [ realm.objects(databaseName).filtered(filteredBy, startDate, endDate)];
    resultsObject = results.map(x => Object.assign({}, x));
    resultsArray = Object.values(resultsObject[0]);
    return resultsArray;
  }

  render() {
    return (
      <Router />
    );
  }
}
