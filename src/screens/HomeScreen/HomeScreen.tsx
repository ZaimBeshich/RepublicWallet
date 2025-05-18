import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {mockTransactions} from '../../mock/mockDataTransactions';
import {Transaction} from '../../mock/mockDataTransactions';
import {SCREEN_TRANSACTION_DETAILS} from '../../res/routes';
import {Separator} from '../../components/Separator';
import {TransactionItem} from '../../components/TransactionItem/TransactionItem';
import {styles} from './HomeScreen.styles';

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

  return (
    <View style={styles.flex}>
      <Header title="Home" hideBackButton />
      <View style={styles.container}>
        <FlatList
          data={mockTransactions}
          renderItem={({item}) => (
            <TransactionItem item={item} onPress={onTransactionPress} />
          )}
          ItemSeparatorComponent={Separator}
          ListHeaderComponent={renderSubHeader}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
