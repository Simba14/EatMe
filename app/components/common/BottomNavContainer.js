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
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 0,
    backgroundColor: '#FFFFFF'
  }
});

export { BottomNavContainer };
