import 'react-native';
import React from 'react';
import ListView from '../app/components/Item';
import renderer from 'react-test-renderer';

test('renders the ListView component correctly', () => {
  const tree = renderer.create(
    <ListView />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
