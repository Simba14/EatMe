import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class BottomNavContainer extends Component {
  render() {
    return (
      <View style={[styles.navColumnContainer, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navColumnContainer: {
    flexDirection: 'column',
    backgroundColor: 'blue',
  }
});

export { BottomNavContainer };
