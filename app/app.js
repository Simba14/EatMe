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
    let binnedItems = this.getBinnedItems();
    this.state = {
      expiringItemsCount,
      binnedItems
    }
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
    this.timer = setInterval(() => {
      this.setState({ expiringItemsCount: this.getExpiringItemsCount() });
      this.setState({ binnedItems: this.getBinnedItems() })
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

    if (appState === 'background') {
      let date = new Date(Date.now() + (4 * 1000)) //moment({ hour: 21, minute: 31, seconds: 0 })
      let message = this.getWeeklyUsageMessage();

      PushNotification.localNotificationSchedule({
        message: message,
        date: date,
        repeatType: 'week'
      });
    }
  }

  getExpiringItemsCount() {
    specificDay = new Date;
    nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    itemsExpiringToday = this.queryDatabase('ItemDB', 'expirationDate >= $0 && expirationDate < $1', specificDay, nextDay);
    return itemsExpiringToday.length;
  }

  getBinnedItems() {
    startOfWeek = new Date(new Date().getTime() - 168 * 60 * 60 * 1000);
    endOfWeek = new Date;
    binnedItems = this.queryDatabase('UsageDB', 'createdTimestamp >= $0 && createdTimestamp < $1 && binned = 1', startOfWeek, endOfWeek);
    return binnedItems;
  }

  getNotificationMessage() {
    return 'You have ' + this.state.expiringItemsCount.toString() + " " + pluralize('item',this.state.expiringItemsCount) + ' that will expire today';
  }

  getWeeklyUsageMessage() {
    if (this.state.binnedItems.length < 5) {
      return 'You threw away ' + this.state.binnedItems.length.toString() + " " + pluralize('item',this.state.binnedItems.length) + ' this week 👍';
    } else {
      return 'You threw away ' + this.state.binnedItems.length.toString() + " " + pluralize('item',this.state.binnedItems.length) + ' this week 😩';
    }
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
