import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import Header from '../../components/Header/Header';
import {colors} from '../../res/colors';
import {ScaledSheet} from 'react-native-size-matters';
import {
  mockTransactions,
  TransactionStatus,
} from '../../mock/mockDataTransactions';
import {formatAmount} from '../../utils/helpers';
import {Transaction} from '../../mock/mockDataTransactions';
import {SCREEN_TRANSACTION_DETAILS} from '../../res/routes';
import FastImage from 'react-native-fast-image';
import Checkmark from '../../assets/checkMark.png';
import {Separator} from '../../components/Separator';
import Cross from '../../assets/redCross.png';
import Clock from '../../assets/clock.png';

const HomeScreen = ({navigation}: {navigation: any}) => {
  const renderSubHeader = () => {
    return (
      <View style={styles.subheaderContainer}>
        <Text style={styles.subheaderText}>{'Transactions'}</Text>
      </View>
    );
  };

  const TransactionImage = useCallback(({type}: {type: TransactionStatus}) => {
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
  }, []);

  const onTransactionPress = (item: Transaction) => {
    navigation.navigate(SCREEN_TRANSACTION_DETAILS, {item});
  };

  const renderItem = ({item}: {item: Transaction}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.transactionItem}
        onPress={() => onTransactionPress(item)}>
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
  return (
    <View style={styles.flex}>
      <Header title="Home" />
      <View style={styles.container}>
        <FlatList
          data={mockTransactions}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
          ListHeaderComponent={renderSubHeader}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = ScaledSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: '16@ms',
  },
  subheaderContainer: {
    paddingVertical: '4@mvs',
  },
  subheaderText: {
    textAlign: 'center',
    fontSize: '18@ms',
    fontWeight: '500',
    color: colors.text.primary,
  },
  text: {
    color: colors.text.primary,
  },
  transactionBlock: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8@s',
    flexShrink: 1,
  },
  transactionImage: {
    width: '24@ms',
    height: '24@ms',
  },
  transactionDescription: {
    fontSize: '16@ms',
    fontWeight: '500',
    color: colors.text.primary,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '8@mvs',
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
});
