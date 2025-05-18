import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '../../components/Header/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../types/navigation';
import {SCREEN_TRANSACTION_DETAILS} from '../../res/routes';
import {colors} from '../../res/colors';
import moment from 'moment';
import {formatAmount} from '../../utils/helpers';
import {Separator} from '../../components/Separator';

type Props = NativeStackScreenProps<
  HomeStackParamList,
  typeof SCREEN_TRANSACTION_DETAILS
>;

const TransactionDetails = ({route}: Props) => {
  const {item} = route.params;
  console.log({item});
  return (
    <View style={styles.container}>
      <Header
        title={
          item.status === 'pending' ? 'Blocked Amount' : 'Transaction Details'
        }
      />
      <View style={styles.content}>
        <Text style={styles.subtitle}>
          {moment(item.date).format('DD MMM, YYYY')}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.block}>
          <Separator />
          <Text style={styles.amount}>
            {` ${item.type === 'income' ? '+' : '-'} ${formatAmount({
              amount: item.amount,
              currency: item.currency,
            })}`}
          </Text>
          <Separator />
        </View>
        <Text style={styles.moreDetails}>{'More details:'}</Text>
        <View style={styles.row}>
          <Text style={styles.leftText}>{'Type:'}</Text>
          <Text style={styles.rightText}>{item.type}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftText}>{'Category:'}</Text>
          <Text style={styles.rightText}>{item.category}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.leftText}>{'Status:'}</Text>
          <Text style={styles.rightText}>{item.status}</Text>
        </View>
      </View>
    </View>
  );
};

export default TransactionDetails;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '4@mvs',
  },
  content: {
    padding: '16@ms',
  },
  subtitle: {
    fontSize: '16@ms',
    color: colors.text.tertiary,
  },
  description: {
    fontSize: '16@ms',
    color: colors.text.primary,
  },
  block: {
    marginVertical: '10@mvs',
  },
  amount: {
    fontSize: '24@ms',
    color: colors.text.primary,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginVertical: '4@mvs',
  },
  moreDetails: {
    fontSize: '24@ms',
    color: colors.text.primary,
    marginVertical: '4@mvs',
  },
  leftText: {
    fontSize: '14@ms',
    color: colors.text.tertiary,
  },
  rightText: {
    fontSize: '15@ms',
    color: colors.text.primary,
  },
});
