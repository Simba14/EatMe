import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import Realm from 'realm';
import Swipeout from 'react-native-swipeout';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome'

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let swipeoutBtns = [{
      text: <Icon name="trash" size={23} color="#900" />,
      backgroundColor: '#e74c3c',
      underlayColor: 'grey',
      onPress: () => { this.props.deleteItem(this.props.item.id, 'binned') }
      },
    {
      text: <Icon name="cutlery" size={23} color="#1c7d44" />,
      fontSize: 30,
      backgroundColor: '#27ae60',
      underlayColor: 'grey',
      onPress: () => { this.props.deleteItem(this.props.item.id, 'eaten') }
    }];

    let expirationDate = this.props.item.expirationDate;
    let style;
    if(this.daysToExpire(expirationDate) < 0) {
      style = styles.expired;
    } else if(this.daysToExpire(expirationDate) < 3) {
      style = styles.shortToExpire;
    } else if(this.daysToExpire(expirationDate) < 7) {
      style = styles.mediumToExpire;
    }

    return(
      <Swipeout right={swipeoutBtns} style={styles.swipeStyle}>
        <View style={[styles.textContainer, style] }>
          <Text style={ styles.textStyleName }> { this.props.item.itemName } </Text>
          <Text style={ styles.textStyleDate }> Expires: { moment(expirationDate).fromNow() } </Text>
        </View>
      </Swipeout>
    );
  }

  daysToExpire(expirationDate) {
    var today = moment();
    var expirationDate = moment(expirationDate);
    return expirationDate.diff(today, 'days')
  }

};

const styles = StyleSheet.create( {
  swipeStyle: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: 360,
    marginBottom: 5
  },
  textContainer: {
    height: 70,
    backgroundColor: '#9EE2CC',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 8
  },
  mediumToExpire: {
    backgroundColor: '#F5CC99'
  },
  shortToExpire: {
    backgroundColor: '#F1BABA'
  },
  expired: {
    backgroundColor: '#9E9E9E'
  },
  textStyleName: {
    fontSize: 15,
    color: '#4A4A4A'
  },
  textStyleDate: {
    fontSize: 15,
    color: '#4A4A4A'
  }
});

export default Item;
