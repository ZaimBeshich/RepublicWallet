import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

jest.mock('../src/context/AppContext', () => ({
  AppProvider: ({children}: {children: React.ReactNode}) => children,
  useApp: () => ({
    init: jest.fn(),
    transactions: [],
    user: null,
    isTransactionsLoading: false,
    isUserLoading: false,
    error: null,
    refreshTransactions: jest.fn(),
    updateUser: jest.fn(),
    updateUserSettings: jest.fn(),
  }),
}));

jest.mock('../src/navigation/Navigation', () => ({
  Navigation: () => null,
}));

describe('App', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders with app-container testID', () => {
    const {getByTestId} = render(<App />);
    expect(getByTestId('app-container')).toBeTruthy();
  });
});
