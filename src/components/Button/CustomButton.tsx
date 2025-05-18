import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../res/colors';

type IButtonProps = {
  title: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;

  onPress: () => void;
};

const CustomButton = ({
  title,
  isLoading = false,
  isDisabled = false,
  style,
  onPress,
}: IButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, isDisabled && styles.buttonDisabled, style]}
      onPress={onPress}
      disabled={isDisabled || isLoading}
      activeOpacity={0.8}>
      {isLoading ? (
        <ActivityIndicator color={colors.text.primary} size="small" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = ScaledSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: '16@ms',
    borderRadius: '12@ms',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: colors.background.secondary,
  },
  title: {
    fontSize: '16@ms',
    fontWeight: '600',
    color: colors.text.primary,
  },
});
