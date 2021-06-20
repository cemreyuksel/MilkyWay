import React from 'react';
import renderer from 'react-test-renderer';

import Stars from './index';

jest.mock('../Star', () => 'StarComponent');

jest.mock('../../hooks', () => ({
  useFetch: () => [
    [
      {
        color: 'RED',
        id: 123,
        name: 'My happy star 123',
        universeId: 333,
      },
      {
        color: 'YELLOW',
        id: 321,
        name: '321 is myy happy star',
        universeId: 33113,
      },
    ],
    false,
  ],
}));

describe('Stars component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders', () => {
    const tree = renderer.create(<Stars />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
