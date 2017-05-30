import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class NavItemContainer extends Component {
  render() {
    return (
      <View style={[styles.navItemContainer, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navItemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#FFFFFF'
  }

});

export { NavItemContainer };