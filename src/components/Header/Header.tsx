import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../../res/colors';
import {useNavigation} from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';

type IHeaderProps = {
  title: string;
  hideBackButton?: boolean;
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
};

const Header = ({
  title = ' ',
  hideBackButton = false,
  leftButton,
  rightButton,
}: IHeaderProps) => {
  const navigation = useNavigation();
  const safeAreaInsets = useSafeAreaInsets();

  const handleBack = () => {
    navigation.goBack();
  };

  const renderLeftButton =
    hideBackButton || !navigation.canGoBack() ? (
      <View style={styles.button} />
    ) : leftButton ? (
      leftButton
    ) : (
      <TouchableOpacity
        onPress={handleBack}
        activeOpacity={0.8}
        style={styles.button}>
        <Text style={styles.text}>{'<-'}</Text>
      </TouchableOpacity>
    );

  const renderRightButton = rightButton ? (
    rightButton
  ) : (
    <View style={styles.button} />
  );

  return (
    <View style={[styles.container, {paddingTop: safeAreaInsets.top}]}>
      {renderLeftButton}
      <Text style={styles.text}>{title}</Text>
      {renderRightButton}
    </View>
  );
};

export default Header;

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '16@mvs',
    paddingHorizontal: '16@ms',
    borderBottomWidth: 1,
    borderBottomColor: colors.border.primary,
  },
  button: {
    minWidth: '40@ms',
  },
  text: {
    color: colors.text.primary,
  },
});
