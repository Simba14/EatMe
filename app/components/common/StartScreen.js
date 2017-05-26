import React from 'react';
import { View, Text, Image } from 'react-native';
import { UpperContainer } from './UpperContainer';

const StartScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <UpperContainer>
        <Text style={styles.title}>Get Started</Text>
        <Text style={styles.body}>Add your first item and start tracking your food</Text>
        <View style={styles.img}>
          <Image
            source={ require('../../assets/downarrow.png')}
            />
        </View>
      </UpperContainer>
    </View>
  )

}

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  title: {
    marginTop: 90,
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'System',
    color: '#323232'
  },
  body: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'System',
    color: '#323232'
  },
  img: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default StartScreen;
