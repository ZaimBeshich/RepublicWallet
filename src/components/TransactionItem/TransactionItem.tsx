import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Transaction, TransactionStatus} from '../../mock/mockDataTransactions';
import {formatAmount} from '../../utils/helpers';
import FastImage from 'react-native-fast-image';
import Checkmark from '../../assets/checkMark.png';
import Cross from '../../assets/redCross.png';
import Clock from '../../assets/clock.png';
import {styles} from './TransactionItem.styles';

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
