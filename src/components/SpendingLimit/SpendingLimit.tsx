import {View, Text} from 'react-native';
import {styles} from './SpendingLimit.styles';
import {formatAmount} from '../../utils/helpers';
import React from 'react';

type SpendingLimitProps = {
  monthlySpend: number;
  monthlyLimit: number;
  currency: string;
};

const SpendingLimit = ({
  monthlySpend,
  monthlyLimit,
  currency,
}: SpendingLimitProps) => {
  return (
    <View style={styles.subheaderContainer}>
      <Text style={styles.subheaderText}>{'Transactions'}</Text>
      <View style={styles.spendContainer}>
        <Text style={styles.spendText}>
          Monthly spend:{' '}
          {formatAmount({
            amount: monthlySpend,
            currency: currency || 'USD',
            roundToNearest: true,
          })}
        </Text>
        <Text style={styles.spendText}>{' / '}</Text>
        <Text
          style={[
            styles.spendText,
            monthlySpend > monthlyLimit
              ? styles.spendTextOverBudget
              : styles.spendTextUnderBudget,
          ]}>
          {formatAmount({
            amount: monthlyLimit || 0,
            currency: currency || 'USD',
          })}
        </Text>
      </View>
    </View>
  );
};

export default SpendingLimit;
