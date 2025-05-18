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
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';

const WalletSettingsScreen = ({navigation}: {navigation: any}) => {
  const {settings, updateSettings, isSettingsLoading} = useApp();
  const [monthlyLimit, setMonthlyLimit] = useState(
    settings?.monthlyLimit.toString() || '1000',
  );
  const [selectedCurrency, setSelectedCurrency] = useState(
    settings?.displayCurrency || 'USD',
  );
  const [showCurrencySelector, setShowCurrencySelector] = useState(false);

  const onSave = async () => {
    await updateSettings({
      monthlyLimit: Number(monthlyLimit),
      displayCurrency: selectedCurrency,
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header title="Wallet Settings" />
      <LoadingScreen isLoading={isSettingsLoading}>
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
                {settings?.availableCurrencies.map(currency => (
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
            isLoading={isSettingsLoading}
          />
        </View>
      </LoadingScreen>
    </View>
  );
};

export default WalletSettingsScreen;
