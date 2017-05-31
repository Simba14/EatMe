import React from 'react';
import { View, StyleSheet } from 'react-native';

const NavActiveBar = () => {
  return (
    <View style={styles.viewStyle}>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    height: 5,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0FB980',
    justifyContent: 'center'
    // justifyContent: 'flex-end'
  }
});

export { NavActiveBar };