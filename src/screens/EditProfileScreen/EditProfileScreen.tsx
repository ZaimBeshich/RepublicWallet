import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/Button/CustomButton';
import {styles} from './EditProfileScreen.styles';
import {colors} from '../../res/colors';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import {useApp} from '../../context/AppContext';

const EditProfileScreen = ({navigation}: {navigation: any}) => {
  const {user, updateUser, isUserLoading} = useApp();
  const [name, setName] = useState(user?.name);
  const [surname, setSurname] = useState(user?.surname);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [walletId, setWalletId] = useState(user?.walletId);

  const onSave = useCallback(async () => {
    if (!user) {
      return;
    }

    try {
      await updateUser({
        id: user.id,
        name,
        surname,
        phoneNumber,
        walletId,
        balance: user.balance,
        currency: user.currency,
      });
      navigation.goBack();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }, [user, name, surname, phoneNumber, walletId, updateUser, navigation]);

  return (
    <View style={styles.container}>
      <Header title="Edit Profile" />
      <LoadingScreen isLoading={isUserLoading}>
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{'Name'}</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                placeholderTextColor={colors.text.tertiary}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Surname</Text>
              <TextInput
                style={styles.input}
                value={surname}
                onChangeText={setSurname}
                placeholder="Enter your surname"
                placeholderTextColor={colors.text.tertiary}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>{'Phone Number'}</Text>
              <TextInput
                style={styles.input}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Enter your phone number"
                placeholderTextColor={colors.text.tertiary}
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>{'Wallet ID'}</Text>
              <TextInput
                style={styles.input}
                value={walletId}
                onChangeText={setWalletId}
                placeholder="Enter your wallet ID"
                placeholderTextColor={colors.text.tertiary}
              />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Save Changes"
            onPress={onSave}
            isLoading={isUserLoading}
          />
        </View>
      </LoadingScreen>
    </View>
  );
};

export default EditProfileScreen;
