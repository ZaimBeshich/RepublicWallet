import {StyleSheet} from 'react-native';
import {colors} from '../../res/colors';

export const styles = StyleSheet.create({
  subheaderContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.secondary,
  },
  subheaderText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
  },
  spendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spendText: {
    fontSize: 16,
    color: colors.text.secondary,
    marginTop: 8,
  },
  spendTextUnderBudget: {
    color: colors.text.green,
  },
  spendTextOverBudget: {
    color: colors.text.red,
  },
});
