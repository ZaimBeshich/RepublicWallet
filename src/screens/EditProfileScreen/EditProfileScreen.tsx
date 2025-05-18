import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/Button/CustomButton';
import {styles} from './EditProfileScreen.styles';
import {colors} from '../../res/colors';
import {useApp} from '../../context/AppContext';

const EditProfileScreen = ({navigation}: {navigation: any}) => {
  const {user, updateUser, isUserLoading} = useApp();
  const [name, setName] = useState(user?.name || '');
  const [surname, setSurname] = useState(user?.surname || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [walletId, setWalletId] = useState(user?.walletId);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = async () => {
    if (!user) {
      return;
    }

    setIsSubmitting(true);
    try {
      await updateUser({
        ...user,
        name,
        surname,
        phoneNumber: phoneNumber || user.phoneNumber,
        walletId: walletId || user.walletId,
      });
      navigation.goBack();
    } catch (error) {
      //
    } finally {
      setIsSubmitting(false);
    }
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
        <CustomButton
          title="Save Changes"
          onPress={handleSave}
          isLoading={isUserLoading || isSubmitting}
        />
      </View>
    </View>
  );
};

export default EditProfileScreen;
