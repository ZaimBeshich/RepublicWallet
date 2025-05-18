import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../../src/screens/HomeScreen/HomeScreen';

jest.mock('../../src/context/AppContext', () => ({
  useApp: () => ({
    transactions: [],
    user: {
      settings: {
        monthlyLimit: 1000,
        displayCurrency: 'USD',
      },
    },
    isTransactionsLoading: false,
  }),
}));

const mockNavigation = {
  navigate: jest.fn(),
};

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<HomeScreen navigation={mockNavigation} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders with loading state', () => {
    jest
      .spyOn(require('../../src/context/AppContext'), 'useApp')
      .mockReturnValue({
        transactions: [],
        user: {
          settings: {
            monthlyLimit: 1000,
            displayCurrency: 'USD',
          },
        },
        isTransactionsLoading: true,
      });

    const {toJSON} = render(<HomeScreen navigation={mockNavigation} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders with transactions', () => {
    jest
      .spyOn(require('../../src/context/AppContext'), 'useApp')
      .mockReturnValue({
        transactions: [
          {
            id: '1',
            amount: 100,
            type: 'expense',
            category: 'Food',
            date: '2024-03-20',
          },
        ],
        user: {
          settings: {
            monthlyLimit: 1000,
            displayCurrency: 'USD',
          },
        },
        isTransactionsLoading: false,
      });

    const {toJSON} = render(<HomeScreen navigation={mockNavigation} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
