import 'react-native';
import React from 'react';
import { Input, LowerContainer } from '../app/components/common';

import renderer from 'react-test-renderer';

test('renders the Input component correctly', () => {
  const tree = renderer.create(
    <Input />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders the LowerContainer component correctly', () => {
  const tree = renderer.create(
    <LowerContainer />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
