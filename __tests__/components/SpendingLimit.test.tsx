import React from 'react';
import {render} from '@testing-library/react-native';
import SpendingLimit from '../../src/components/SpendingLimit/SpendingLimit';

describe('SpendingLimit', () => {
  it('should render correctly with default values', () => {
    const {getByText} = render(
      <SpendingLimit monthlySpend={0} monthlyLimit={0} currency="USD" />,
    );

    expect(getByText('Transactions')).toBeTruthy();
    expect(getByText('Monthly spend:\n\n0 $')).toBeTruthy();
    expect(getByText('0,00 $')).toBeTruthy();
  });

  it('should render correctly with values', () => {
    const {getByText} = render(
      <SpendingLimit monthlySpend={500} monthlyLimit={1000} currency="USD" />,
    );

    expect(getByText('Transactions')).toBeTruthy();
    expect(getByText('Monthly spend:\n\n500 $')).toBeTruthy();
    expect(getByText('1 000,00 $')).toBeTruthy();
  });

  it('should render correctly with different currency', () => {
    const {getByText} = render(
      <SpendingLimit monthlySpend={500} monthlyLimit={1000} currency="EUR" />,
    );

    expect(getByText('Transactions')).toBeTruthy();
    expect(getByText('Monthly spend:\n\n500 €')).toBeTruthy();
    expect(getByText('1 000,00 €')).toBeTruthy();
  });
});
