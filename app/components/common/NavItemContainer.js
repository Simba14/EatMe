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

});

export { NavItemContainer };