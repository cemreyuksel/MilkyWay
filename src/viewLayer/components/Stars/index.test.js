import React from 'react';
import renderer from 'react-test-renderer';

import Stars from './index';

describe('Universes component', () => {
  test('renders', () => {
    const tree = renderer
      .create(<Stars />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});