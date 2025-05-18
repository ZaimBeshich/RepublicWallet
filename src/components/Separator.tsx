import {ScaledSheet} from 'react-native-size-matters';
import React from 'react';
import {View} from 'react-native';

export const Separator = () => <View style={styles.separator} />;

const styles = ScaledSheet.create({
  separator: {
    borderWidth: 0.5,
    borderColor: 'blue',
    marginHorizontal: '16@ms',
    marginVertical: '2@vs',
  },
});
