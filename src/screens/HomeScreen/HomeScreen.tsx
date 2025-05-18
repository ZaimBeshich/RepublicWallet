import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {colors} from '../../res/colors';
import {ScaledSheet} from 'react-native-size-matters';
import {mockTransactions} from '../../mock/mockDataTransactions';
import {formatAmount} from '../../utils/helpers';
import {Transaction} from '../../mock/mockDataTransactions';
import {SCREEN_TRANSACTION_DETAILS} from '../../res/routes';
import FastImage from 'react-native-fast-image';
import Checkmark from '../../assets/checkMark.png';

const Separator = () => <View style={styles.separator} />;

const HomeScreen = ({navigation}: {navigation: any}) => {
  const renderSubHeader = () => {
    return (
      <View style={styles.subheaderContainer}>
        <Text style={styles.subheaderText}>{'Transactions'}</Text>
      </View>
    );
  };

  const onTransactionPress = (item: Transaction) => {
    navigation.navigate(SCREEN_TRANSACTION_DETAILS, {item});
  };

  const renderItem = ({item}: {item: Transaction}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.transactionItem}
        onPress={() => onTransactionPress(item)}>
        <View style={styles.transactionInfo}>
          <FastImage source={Checkmark} style={{width: 20, height: 20}} />
          <Text
            style={styles.transactionDescription}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.description}
          </Text>

          <Text style={styles.text}>{item.status}</Text>
        </View>
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
  transactionDescription: {
    fontSize: '16@ms',
    fontWeight: '500',
    color: colors.text.primary,
  },
  amountText: {
    fontSize: '14@ms',
    fontWeight: '500',
  },
  amountTextPlus: {
    color: colors.system.green,
  },
  amountTextMinus: {
    color: colors.system.red,
  },
  separator: {
    borderWidth: 0.5,
    borderColor: 'blue',
    marginHorizontal: '16@ms',
    marginVertical: '2@vs',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '8@mvs',
  },
  transactionInfo: {
    flexDirection: 'column',
    gap: '8@vs',
  },
});
