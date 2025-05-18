import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {colors} from '../../res/colors';
import {ScaledSheet} from 'react-native-size-matters';
import {mockTransactions} from '../../mock/mockDataTransactions';
import {Transaction} from '../../mock/mockDataTransactions';
import {SCREEN_TRANSACTION_DETAILS} from '../../res/routes';
import {Separator} from '../../components/Separator';
import {TransactionItem} from '../../components/TransactionItem/TransactionItem';

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
      <Header title="Home" />
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
});
