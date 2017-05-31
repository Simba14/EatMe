import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class BottomNavContainer extends Component {
  render() {
    return (
      <View style={[styles.bottomNavContainer, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomNavContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

export { BottomNavContainer };
