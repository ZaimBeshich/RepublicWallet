import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Header from '../../components/Header/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../types/navigation';
import {SCREEN_TRANSACTION_DETAILS} from '../../res/routes';

type Props = NativeStackScreenProps<
  HomeStackParamList,
  typeof SCREEN_TRANSACTION_DETAILS
>;

const TransactionDetails = ({route}: Props) => {
  const {item} = route.params;
  console.log({item});
  return (
    <View style={styles.container}>
      <Header title="Transaction" />
      <View style={styles.content}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default TransactionDetails;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: '16@ms',
  },
  description: {
    fontSize: '16@ms',
    color: '#000',
  },
});
