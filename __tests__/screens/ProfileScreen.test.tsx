import React from 'react';
import {render} from '@testing-library/react-native';
import ProfileScreen from '../../src/screens/ProfileScreen/ProfileScreen';

jest.mock('../../src/context/AppContext', () => ({
  useApp: () => ({
    user: {
      name: 'John',
      surname: 'Doe',
      balance: 1000,
      settings: {
        displayCurrency: 'USD',
      },
    },
    isUserLoading: false,
  }),
}));

const mockNavigation = {
  navigate: jest.fn(),
};

describe('ProfileScreen', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<ProfileScreen navigation={mockNavigation} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders with loading state', () => {
    jest
      .spyOn(require('../../src/context/AppContext'), 'useApp')
      .mockReturnValue({
        user: {
          name: 'John',
          surname: 'Doe',
          balance: 1000,
          settings: {
            displayCurrency: 'USD',
          },
        },
        isUserLoading: true,
      });

    const {toJSON} = render(<ProfileScreen navigation={mockNavigation} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders with different currency', () => {
    jest
      .spyOn(require('../../src/context/AppContext'), 'useApp')
      .mockReturnValue({
        user: {
          name: 'John',
          surname: 'Doe',
          balance: 1000,
          settings: {
            displayCurrency: 'EUR',
          },
        },
        isUserLoading: false,
      });

    const {toJSON} = render(<ProfileScreen navigation={mockNavigation} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('returns null when user is not available', () => {
    jest
      .spyOn(require('../../src/context/AppContext'), 'useApp')
      .mockReturnValue({
        user: null,
        isUserLoading: false,
      });

    const {toJSON} = render(<ProfileScreen navigation={mockNavigation} />);
    expect(toJSON()).toBeNull();
  });
});
