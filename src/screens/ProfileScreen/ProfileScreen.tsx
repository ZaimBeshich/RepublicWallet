import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header/Header';
import {formatAmount} from '../../utils/helpers';
import {SCREEN_EDIT_PROFILE, SCREEN_WALLET_SETTINGS} from '../../res/routes';
import CustomButton from '../../components/Button/CustomButton';
import {styles} from './ProfileScreen.styles';
import {useApp} from '../../context/AppContext';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';

const ProfileScreen = ({navigation}: {navigation: any}) => {
  const {user, isUserLoading} = useApp();

  const onEditProfilePress = () => {
    navigation.navigate(SCREEN_EDIT_PROFILE);
  };

  const onWalletSettingsPress = () => {
    navigation.navigate(SCREEN_WALLET_SETTINGS);
  };

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header title="Profile" hideBackButton />
      <LoadingScreen isLoading={isUserLoading}>
        <View style={styles.content}>
          <View style={styles.profileInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {user.name[0]}
                {user.surname[0]}
              </Text>
            </View>
            <Text style={styles.name}>
              {user.name} {user.surname}
            </Text>
            <Text style={styles.balance}>
              {formatAmount({
                amount: user.balance,
                currency: user.settings.displayCurrency,
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
      </LoadingScreen>
    </View>
  );
};

export default ProfileScreen;
