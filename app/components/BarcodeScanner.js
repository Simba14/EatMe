import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text, Alert } from 'react-native';
import Camera from 'react-native-camera';
import axios from 'axios';
import MyItemsScreen from '../screens/MyItemsScreen';
import { Actions } from 'react-native-router-flux';

class BarcodeScanner extends Component {
  constructor() {
    super();
    this.state = {
      showCamera: true,
      barcodeNumber: "",
      scannedItem: ""
    }
  }

  render() {
      if (this.state.showCamera) {
        return (
          <View style={styles.container}>
            <Camera
              ref={(cam) => {
                this.camera = cam;
              }}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}
              onBarCodeRead={(data) => this.setState({ barcodeNumber: data.data, showCamera: false })}
            >
            </Camera>
          </View>
        );
      } else {
        return (
        <View>
          {Actions.main()}
        </View>
      );
    }
  }

  // componentWillMount() {
  //   // var number = .data;
  //   this.setState({showCamera: false});
  //   axios.get('http://api.upcdatabase.org/json/128009a43963c119609bd223c9f249cf/5449000131836')
  //     .then( (response) => Alert.alert("Item: " + response.description) );
  // }

  // barcodeRead(data) {
  //   this.setState({showCamera: false});
  //   Alert.alert(
  //     "type:" + data.type + "data" + data.data
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default BarcodeScanner;
