import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../res/colors';
import {Transaction, TransactionStatus} from '../../mock/mockDataTransactions';
import {formatAmount} from '../../utils/helpers';
import FastImage from 'react-native-fast-image';
import Checkmark from '../../assets/checkMark.png';
import Cross from '../../assets/redCross.png';
import Clock from '../../assets/clock.png';

interface TransactionItemProps {
  item: Transaction;
  onPress: (item: Transaction) => void;
}

interface TransactionImageProps {
  type: TransactionStatus;
}

const TransactionImage = memo(({type}: TransactionImageProps) => {
  let image = Checkmark;
  switch (type) {
    case 'completed':
      image = Checkmark;
      break;
    case 'pending':
      image = Clock;
      break;
    case 'failed':
      image = Cross;
      break;
  }
  return (
    <FastImage
      source={image}
      resizeMode="contain"
      style={styles.transactionImage}
    />
  );
});

export const TransactionItem = ({item, onPress}: TransactionItemProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.transactionItem}
      onPress={() => onPress(item)}>
      <View style={styles.transactionBlock}>
        <TransactionImage type={item.status} />
        <View style={styles.transactionInfo}>
          <Text
            style={styles.transactionDescription}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.description}
          </Text>
          <Text style={styles.text}>{item.status}</Text>
        </View>
      </View>
      <View style={styles.amountContainer}>
        <Text
          style={[
            styles.amountText,
            item.type === 'income'
              ? styles.amountTextPlus
              : styles.amountTextMinus,
          ]}>
          {`${item.type === 'income' ? '+' : '-'} ${formatAmount({
            amount: item.amount,
            currency: item.currency,
          })}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '8@mvs',
  },
  transactionBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8@s',
    flexShrink: 1,
  },
  transactionInfo: {
    flexShrink: 1,
    flexDirection: 'column',
    gap: '8@vs',
    minWidth: 0,
  },
  amountContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexShrink: 0,
  },
  amountText: {
    fontSize: '14@ms',
    fontWeight: '500',
    textAlign: 'right',
  },
  amountTextPlus: {
    color: colors.system.green,
  },
  amountTextMinus: {
    color: colors.system.red,
  },
  text: {
    color: colors.text.primary,
  },
  transactionDescription: {
    fontSize: '16@ms',
    fontWeight: '500',
    color: colors.text.primary,
  },
  transactionImage: {
    width: '24@ms',
    height: '24@ms',
  },
});
