import React from 'react';
import renderer from 'react-test-renderer';

import Imprint from './index';

describe('Imprint component', () => {
  test('renders', () => {
    const tree = renderer.create(<Imprint />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
