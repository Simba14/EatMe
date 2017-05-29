import React from 'react';
import { View, Text, Image } from 'react-native';
import { UpperContainer } from './UpperContainer';

const StartScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.title}>Get Started</Text>
      <Text style={styles.body}>Add your first item and start tracking your food</Text>
      <Image source={ require('../../assets/downarrow.png')} />
    </View>
  )
}

const styles = {
  viewStyle: {
    flex: 1,
    height: 275,
    marginTop: 120,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    color: '#323232'
  },
  body: {
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
    fontSize: 20,
    color: '#323232'
  },
}

export default StartScreen;
