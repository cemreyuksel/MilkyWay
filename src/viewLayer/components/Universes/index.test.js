import React from 'react';
import TestRenderer from 'react-test-renderer';

import Universes from './index';

jest.mock('../../hooks', () => ({
  useFetch: () => [
    [
      {
        id: 333,
        maxSize: 3,
        name: 'Big universe',
      }
    ],
    false,
  ],
}));

describe('Universes component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders', () => {
    const tree = TestRenderer.create(<Universes />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('displays the maximum and current size of the universe', () => {
    const expectedHeader = ["Max Size: ", "3"];
    const expectedTitle = ['Big universe'];
    const renderer = TestRenderer.create(
      <Universes />
    );
    const instance = renderer.root;
    expect(instance.findByProps({className: "card-header"}).children).toEqual(expectedHeader);
    expect(instance.findByProps({className: "card-title h5"}).children).toEqual(expectedTitle);
  });
});
