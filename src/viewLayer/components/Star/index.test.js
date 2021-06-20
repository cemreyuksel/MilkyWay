import React from 'react';
import renderer from 'react-test-renderer';

import Star from './index';

describe('Universes component', () => {
  test('renders', () => {
    const tree = renderer
      .create(<Star />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});