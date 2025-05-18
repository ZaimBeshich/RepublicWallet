import {View, FlatList} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {Transaction} from '../../types/api';
import {SCREEN_TRANSACTION_DETAILS} from '../../res/routes';
import {Separator} from '../../components/Separator';
import {TransactionItem} from '../../components/TransactionItem/TransactionItem';
import {styles} from './HomeScreen.styles';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import {useApp} from '../../context/AppContext';
import SpendingLimit from '../../components/SpendingLimit/SpendingLimit';

const HomeScreen = ({navigation}: {navigation: any}) => {
  const {transactions, user, isTransactionsLoading} = useApp();

  const monthlySpend = transactions.reduce((acc, item) => {
    if (item.type !== 'income') {
      return acc + item.amount;
    }
    return acc;
  }, 0);

  const onTransactionPress = (item: Transaction) => {
    navigation.navigate(SCREEN_TRANSACTION_DETAILS, {item});
  };

  return (
    <View style={styles.flex}>
      <Header title="Home" hideBackButton />
      <LoadingScreen isLoading={isTransactionsLoading}>
        <View style={styles.container}>
          <SpendingLimit
            monthlySpend={monthlySpend}
            monthlyLimit={user?.settings.monthlyLimit || 0}
            currency={user?.settings.displayCurrency || 'USD'}
          />
          <FlatList
            data={transactions}
            renderItem={({item}) => (
              <TransactionItem item={item} onPress={onTransactionPress} />
            )}
            ItemSeparatorComponent={Separator}
          />
        </View>
      </LoadingScreen>
    </View>
  );
};

export default HomeScreen;
