import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class UpperContainer extends Component {
  render() {
    return (
      <View style={[styles.upperContainer, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  upperContainer: {
    flex: 9,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  }
});

export { UpperContainer };
