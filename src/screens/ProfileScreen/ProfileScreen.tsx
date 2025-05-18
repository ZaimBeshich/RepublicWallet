import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {formatAmount} from '../../utils/helpers';
import {SCREEN_EDIT_PROFILE} from '../../res/routes';
import CustomButton from '../../components/Button/CustomButton';
import {styles} from './ProfileScreen.styles';

const mockUser = {
  name: 'John',
  surname: 'Doe',
  balance: {
    amount: 15000,
    currency: 'USD',
  },
};

const ProfileScreen = ({navigation}: {navigation: any}) => {
  const onEditProfilePress = () => {
    navigation.navigate(SCREEN_EDIT_PROFILE);
  };

  const onWalletSettingsPress = () => {
    console.log('wallet');
  };

  return (
    <View style={styles.container}>
      <Header title="Profile" hideBackButton />
      <View style={styles.content}>
        <View style={styles.profileInfo}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>
              {mockUser.name[0]}
              {mockUser.surname[0]}
            </Text>
          </View>
          <Text style={styles.nameText}>
            {mockUser.name} {mockUser.surname}
          </Text>
          <Text style={styles.balanceText}>
            {formatAmount({
              amount: mockUser.balance.amount,
              currency: mockUser.balance.currency,
            })}
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <CustomButton title="Edit Profile" onPress={onEditProfilePress} />
          <CustomButton
            title="Wallet Settings"
            onPress={onWalletSettingsPress}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
