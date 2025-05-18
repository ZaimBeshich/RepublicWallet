import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header/Header';
import CustomButton from '../../components/Button/CustomButton';
import {styles} from './WalletSettingsScreen.styles';
import {colors} from '../../res/colors';
import {useApp} from '../../context/AppContext';

const WalletSettingsScreen = ({navigation}: {navigation: any}) => {
  const {user, updateUserSettings, isUserLoading} = useApp();
  const [monthlyLimit, setMonthlyLimit] = useState(
    user?.settings.monthlyLimit.toString() || '1000',
  );
  const [selectedCurrency, setSelectedCurrency] = useState(
    user?.settings.displayCurrency || 'USD',
  );
  const [showCurrencySelector, setShowCurrencySelector] = useState(false);

  const onSave = async () => {
    if (!user) {
      return;
    }

    await updateUserSettings({
      monthlyLimit: Number(monthlyLimit) ?? user.settings.monthlyLimit,
      displayCurrency: selectedCurrency,
      availableCurrencies: user.settings.availableCurrencies,
    }).then(() => navigation.goBack());
  };

  return (
    <View style={styles.container}>
      <Header title="Wallet Settings" />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.settingsBlock}>
          <View style={styles.row}>
            <Text style={styles.label}>Monthly Spending Limit</Text>
            <TextInput
              style={styles.input}
              value={monthlyLimit}
              onChangeText={setMonthlyLimit}
              keyboardType="numeric"
              placeholder="Enter limit"
              placeholderTextColor={colors.text.tertiary}
              clearButtonMode="while-editing"
            />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Display Currency</Text>
            <TouchableOpacity
              style={styles.currencySelector}
              onPress={() => setShowCurrencySelector(!showCurrencySelector)}>
              <Text style={styles.currencyText}>
                {selectedCurrency || 'Select Currency'}
                {'   ↓'}
              </Text>
            </TouchableOpacity>
          </View>

          {showCurrencySelector && (
            <View style={styles.settingsBlock}>
              {user?.settings.availableCurrencies.map((currency: string) => (
                <TouchableOpacity
                  key={currency}
                  style={styles.row}
                  activeOpacity={0.8}
                  onPress={() => {
                    setSelectedCurrency(currency);
                    setShowCurrencySelector(false);
                  }}>
                  <Text style={styles.label}>{currency}</Text>
                  {selectedCurrency === currency && (
                    <Text
                      style={[styles.currencyText, {color: colors.primary}]}>
                      ✓
                    </Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Save Changes"
          onPress={onSave}
          isLoading={isUserLoading}
        />
      </View>
    </View>
  );
};

export default WalletSettingsScreen;
