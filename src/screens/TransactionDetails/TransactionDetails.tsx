import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../components/Header/Header';
import {formatAmount} from '../../utils/helpers';
import {styles} from './TransactionDetails.styles';
import {SCREEN_TRANSACTION_DETAILS} from '../../res/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../types/navigation';
import moment from 'moment';

type TransactionDetailsProps = NativeStackScreenProps<
  HomeStackParamList,
  typeof SCREEN_TRANSACTION_DETAILS
>;

const TransactionDetails = ({route}: TransactionDetailsProps) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <Header title="Transaction Details" />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.transactionInfo}>
          <Text style={styles.amount}>
            {`${item.type === 'income' ? '+' : '-'} ${formatAmount({
              amount: item.amount,
              currency: item.currency,
            })}`}
          </Text>
          <Text style={styles.status}>{item.status}</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>
              {moment(item.date).format('DD MMM, YYYY')}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Description</Text>
            <Text style={styles.value}>{item.description}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Category</Text>
            <Text style={styles.value}>{item.category}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Type</Text>
            <Text style={styles.value}>{item.type}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TransactionDetails;
