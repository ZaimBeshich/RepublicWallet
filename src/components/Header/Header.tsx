import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './Header.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  hideBackButton?: boolean;
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
}

const Header = ({
  title = ' ',
  hideBackButton = false,
  leftButton,
  rightButton,
}: HeaderProps) => {
  const navigation = useNavigation();
  const safeAreaInsets = useSafeAreaInsets();

  const renderLeftButton =
    hideBackButton || !navigation.canGoBack() ? (
      <View style={styles.backButton} />
    ) : leftButton ? (
      leftButton
    ) : (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
        style={styles.backButton}>
        <Text style={styles.backButtonText}>{'<-'}</Text>
      </TouchableOpacity>
    );

  const renderRightButton = rightButton ? (
    rightButton
  ) : (
    <View style={styles.backButton} />
  );
  return (
    <View style={[styles.container, {paddingTop: safeAreaInsets.top}]}>
      {renderLeftButton}
      <Text style={styles.title}>{title}</Text>
      {renderRightButton}
    </View>
  );
};

export default Header;
