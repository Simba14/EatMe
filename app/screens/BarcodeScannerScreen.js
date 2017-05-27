import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import BarcodeScanner from '../components/BarcodeScanner';
import { ViewContainer, UpperContainer, LowerContainer } from '../components/common';

class BarcodeScannerScreen extends Component {
  render() {
    return (
      <ViewContainer>
        <BarcodeScanner />
      </ViewContainer>
    );
  }
}

export default BarcodeScannerScreen;
