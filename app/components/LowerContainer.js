import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class LowerContainer extends Component {
  render() {
    return (
      <View style={[styles.lowerContainer, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lowerContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  }
});

module.exports = LowerContainer
