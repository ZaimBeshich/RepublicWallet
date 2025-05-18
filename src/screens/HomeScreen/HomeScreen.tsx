import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {Transaction} from '../../types/api';
import {SCREEN_TRANSACTION_DETAILS} from '../../res/routes';
import {Separator} from '../../components/Separator';
import {TransactionItem} from '../../components/TransactionItem/TransactionItem';
import {styles} from './HomeScreen.styles';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import {useApp} from '../../context/AppContext';

const HomeScreen = ({navigation}: {navigation: any}) => {
  const {transactions, user, isTransactionsLoading} = useApp();

  const renderSubHeader = () => {
    return (
      <View style={styles.subheaderContainer}>
        <Text style={styles.subheaderText}>{'Transactions'}</Text>
      </View>
    );
  };
  console.log({user});

  const onTransactionPress = (item: Transaction) => {
    navigation.navigate(SCREEN_TRANSACTION_DETAILS, {item});
  };

  return (
    <View style={styles.flex}>
      <Header title="Home" hideBackButton />
      <LoadingScreen isLoading={isTransactionsLoading}>
        <View style={styles.container}>
          <FlatList
            data={transactions}
            renderItem={({item}) => (
              <TransactionItem item={item} onPress={onTransactionPress} />
            )}
            ItemSeparatorComponent={Separator}
            ListHeaderComponent={renderSubHeader}
          />
        </View>
      </LoadingScreen>
    </View>
  );
};

export default HomeScreen;
