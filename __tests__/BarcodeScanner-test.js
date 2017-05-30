import 'react-native';
import React from 'react';
import BarcodeScanner from '../app/components/BarcodeScanner';
import renderer from 'react-test-renderer';

test('renders the BarcodeScanner component correctly', () => {
  const tree = renderer.create(
    <BarcodeScanner />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
