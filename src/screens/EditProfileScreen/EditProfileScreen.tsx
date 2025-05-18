import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/Button/CustomButton';
import {styles} from './EditProfileScreen.styles';
import {colors} from '../../res/colors';

const mockUser = {
  name: 'Zaim',
  surname: 'Beshich',
  phoneNumber: '+7 (999) 123-45-67',
  walletId: 'WALLET-123456',
};

const EditProfileScreen = ({navigation}: {navigation: any}) => {
  const [name, setName] = useState(mockUser.name);
  const [surname, setSurname] = useState(mockUser.surname);
  const [phoneNumber, setPhoneNumber] = useState(mockUser.phoneNumber);
  const [walletId, setWalletId] = useState(mockUser.walletId);

  const onSave = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header title="Edit Profile" />
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
        <CustomButton title="Save Changes" onPress={onSave} isLoading={false} />
      </View>
    </View>
  );
};

export default EditProfileScreen;
