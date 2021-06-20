import React from 'react';
import TestRenderer from 'react-test-renderer';
import Star from './index';

jest.mock('../../hooks', () => ({
  useFetch: () => [
    [
      {
        id: 333,
        maxSize: 3,
        name: 'Big universe',
      },
    ],
    false,
  ],
}));

const mockName = 'some star name';
const mockColor = 'red';
const mockUniverseId = 333;

describe('Stars component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders', () => {
    const tree = TestRenderer.create(
      <Star name={mockName} mockColor={mockColor} universeId={mockUniverseId} />
    ).toJSON();;

    expect(tree).toMatchSnapshot();
  });

  test('displays the corresponding name of the universe', () => {
    const expectedChildren = ['Universe: ', 'Big universe']
    const renderer = TestRenderer.create(
      <Star name={mockName} mockColor={mockColor} universeId={mockUniverseId} />
    );
    const instance = renderer.root;
    
    expect(instance.findByProps({className: "card-header"}).children).toEqual(expectedChildren);
  });
});
