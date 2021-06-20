import React from 'react';
import renderer from 'react-test-renderer';

import Universes from './index';

describe('Universes component', () => {
  test('renders', () => {
    const tree = renderer
      .create(<Universes />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});