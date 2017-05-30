import 'react-native';
import React from 'react';
import { Input, LowerContainer, SubmitButton, UpperContainer, ViewContainer, StartScreen } from '../app/components/common';

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
});

test('renders the SubmitButton component correctly', () => {
  const tree = renderer.create(
    <SubmitButton />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders the UpperContainer component correctly', () => {
  const tree = renderer.create(
    <UpperContainer />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders the ViewContainer component correctly', () => {
  const tree = renderer.create(
    <ViewContainer />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders the StartScreen component correctly', () => {
  const tree = renderer.create(
    <StartScreen />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
